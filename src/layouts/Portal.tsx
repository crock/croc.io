import React, { Fragment, useState, useEffect, useContext } from "react"
import { Menu, Popover, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon, PaperClipIcon } from "@heroicons/react/20/solid"
import classNames from "classnames"
import { Link } from "gatsby"
import axios from "axios"
import { AppActionTypes, AppContext } from "../store"

const navigation = [
	{ name: "Home", href: "/", current: false },
	{ name: "Dashboard", href: "/portal", current: true },
	{
		name: "Write For Us",
		href: "/portal/writer-application",
		current: false,
	},
	{ name: "Resources", href: "/portal/resources", current: false },
	{ name: "Drafts", href: "/portal/drafts", current: false },
]

const userNavigation = [
	{ name: "Account", href: "#" },
	{ name: "Sign out", href: "#" },
]

interface ILayout {
	children: React.ReactNode
}

export default function Portal({ children }: ILayout) {
	const { state, dispatch } = useContext(AppContext)

	useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:3000/api/auth/verify",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
			.then((res) => {
				if (res.data.verified) {
					dispatch({ type: AppActionTypes.login })
				} else {
					dispatch({ type: AppActionTypes.logout })
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

  useEffect(() => {

    if (state.isAuthenticated) {
		const token = localStorage.getItem("token")

		if (token) {
			dispatch({ type: AppActionTypes.setToken, payload: token })
		}

      axios({
        method: "GET",
        url: "http://localhost:3000/api/auth/profile",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
		  dispatch({ type: AppActionTypes.setUserProfile, payload: res.data })
        })
        .catch((err) => {
          console.log(err)
        })
    }

	}, [state.isAuthenticated])

	return (
		<>
			<div className="min-h-full">
				<Popover as="header" className="bg-indigo-600 pb-24">
					{({ open }) => (
						<>
							<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
								<div className="relative flex items-center justify-center py-5 lg:justify-between">
									{/* Logo */}
									<div className="absolute left-0 flex-shrink-0 lg:static">
										<Link to="/">
											<span className="sr-only">
												Croc Studios
											</span>
											<img
												className="h-8 w-auto"
												src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
												alt="Your Company"
											/>
										</Link>
									</div>

									{/* Right section on desktop */}
									{state.isAuthenticated ? (
										<div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
											<Link
												to="/portal/new"
												className="flex-shrink-0 mr-4 flex flex-row flex-nowrap justify-around items-center rounded-sm shadow-sm py-2 px-4 text-white bg-primary hover:bg-primary-light"
											>
												<span className="sr-only">
													New Draft
												</span>
												<PaperClipIcon
													className="h-5 w-5"
													aria-hidden="true"
												/>
												<span className="ml-2">
													New Draft
												</span>
											</Link>
											<button
												type="button"
												className="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
											>
												<span className="sr-only">
													View notifications
												</span>
												<BellIcon
													className="h-6 w-6"
													aria-hidden="true"
												/>
											</button>

											{/* Profile dropdown */}
											<Menu
												as="div"
												className="relative ml-4 flex-shrink-0"
											>
												<div>
													<Menu.Button className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
														<span className="sr-only">
															Open user menu
														</span>
														{ state.user?.avatarUrl ? <img
															className="h-8 w-8 rounded-full"
															src={state.user?.avatarUrl}
															alt=""
														/> : null }
													</Menu.Button>
												</div>
												<Transition
													as={Fragment}
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
														{userNavigation.map(
															(item) => (
																<Menu.Item
																	key={
																		item.name
																	}
																>
																	{({
																		active,
																	}) => (
																		<Link
																			to={
																				item.href
																			}
																			className={classNames(
																				active
																					? "bg-gray-100"
																					: "",
																				"block px-4 py-2 text-sm text-gray-700"
																			)}
																		>
																			{
																				item.name
																			}
																		</Link>
																	)}
																</Menu.Item>
															)
														)}
													</Menu.Items>
												</Transition>
											</Menu>
										</div>
									) : null}

									{/* Search */}
									<div className="min-w-0 flex-1 px-12 lg:hidden">
										<div className="mx-auto w-full max-w-xs">
											<label
												htmlFor="desktop-search"
												className="sr-only"
											>
												Search
											</label>
											<div className="relative text-white focus-within:text-gray-600">
												<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
													<MagnifyingGlassIcon
														className="h-5 w-5"
														aria-hidden="true"
													/>
												</div>
												<input
													id="desktop-search"
													className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
													placeholder="Search"
													type="search"
													name="search"
												/>
											</div>
										</div>
									</div>

									{/* Menu button */}
									<div className="absolute right-0 flex-shrink-0 lg:hidden">
										{/* Mobile menu button */}
										<Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
											<span className="sr-only">
												Open main menu
											</span>
											{open ? (
												<XMarkIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<Bars3Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Popover.Button>
									</div>
								</div>
								<div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
									<div className="grid grid-cols-3 items-center gap-8">
										<div className="col-span-2">
											<nav className="flex space-x-4">
												{navigation.map((item) => (
													<Link
														key={item.name}
														to={item.href}
														className={classNames(
															item.current
																? "text-white"
																: "text-indigo-100",
															"text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
														)}
														aria-current={
															item.current
																? "page"
																: undefined
														}
													>
														{item.name}
													</Link>
												))}
											</nav>
										</div>
										<div>
											<div className="mx-auto w-full max-w-md">
												<label
													htmlFor="mobile-search"
													className="sr-only"
												>
													Search
												</label>
												<div className="relative text-white focus-within:text-gray-600">
													<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
														<MagnifyingGlassIcon
															className="h-5 w-5"
															aria-hidden="true"
														/>
													</div>
													<input
														id="mobile-search"
														className="block w-full rounded-md border border-transparent bg-white bg-opacity-20 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-white focus:border-transparent focus:bg-opacity-100 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
														placeholder="Search"
														type="search"
														name="search"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<Transition.Root as={Fragment}>
								<div className="lg:hidden">
									<Transition.Child
										as={Fragment}
										enter="duration-150 ease-out"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="duration-150 ease-in"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
									</Transition.Child>

									<Transition.Child
										as={Fragment}
										enter="duration-150 ease-out"
										enterFrom="opacity-0 scale-95"
										enterTo="opacity-100 scale-100"
										leave="duration-150 ease-in"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-95"
									>
										<Popover.Panel
											focus
											className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
										>
											<div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
												<div className="pt-3 pb-2">
													<div className="flex items-center justify-between px-4">
														<div>
															<img
																className="h-8 w-auto"
																src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
																alt="Your Company"
															/>
														</div>
														<div className="-mr-2">
															<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
																<span className="sr-only">
																	Close menu
																</span>
																<XMarkIcon
																	className="h-6 w-6"
																	aria-hidden="true"
																/>
															</Popover.Button>
														</div>
													</div>
													<div className="mt-3 space-y-1 px-2">
														<Link
															to="#"
															className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
														>
															Home
														</Link>
														<Link
															to="#"
															className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
														>
															Application
														</Link>
														<Link
															to="#"
															className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
														>
															Resources
														</Link>
														<Link
															to="#"
															className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
														>
															Account
														</Link>
														<Link
															to="#"
															className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
														>
															Drafts
														</Link>
													</div>
												</div>
												{state.isAuthenticated ? (
													<div className="pt-4 pb-2">
														<div className="flex items-center px-5">
															<div className="flex-shrink-0">
																{ state.user?.avatarUrl ? <img
																	className="h-10 w-10 rounded-full"
																	src={
																		state.user.avatarUrl
																	}
																	alt=""
																/> : null }
															</div>
															<div className="ml-3 min-w-0 flex-1">
																<div className="truncate text-base font-medium text-gray-800">
																	{`${state.user?.firstName} ${state.user?.lastName}` + (state.user?.psuedonym ? ` (${state.user?.psuedonym})` : "")}
																</div>
																<div className="truncate text-sm font-medium text-gray-500">
																	{state.user?.email}
																</div>
															</div>
															<button
																type="button"
																className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
															>
																<span className="sr-only">
																	View
																	notifications
																</span>
																<BellIcon
																	className="h-6 w-6"
																	aria-hidden="true"
																/>
															</button>
														</div>
														<div className="mt-3 space-y-1 px-2">
															{userNavigation.map(
																(item) => (
																	<Link
																		key={
																			item.name
																		}
																		to={
																			item.href
																		}
																		className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
																	>
																		{
																			item.name
																		}
																	</Link>
																)
															)}
														</div>
													</div>
												) : null}
											</div>
										</Popover.Panel>
									</Transition.Child>
								</div>
							</Transition.Root>
						</>
					)}
				</Popover>
				<main className="-mt-24 pb-8">
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
						<h1 className="sr-only">Page title</h1>
						{/* Main 3 column grid */}
						<div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
							{/* Left column */}
							<div className="grid grid-cols-1 gap-4 lg:col-span-2">
								<section aria-labelledby="section-1-title">
									<h2
										className="sr-only"
										id="section-1-title"
									>
										Section title
									</h2>
									<div className="overflow-hidden rounded-lg bg-white shadow">
										<div className="p-6">{children}</div>
									</div>
								</section>
							</div>

							{/* Right column */}
							<div className="grid grid-cols-1 gap-4">
								<section aria-labelledby="section-2-title">
									<h2
										className="sr-only"
										id="section-2-title"
									>
										Section title
									</h2>
									<div className="overflow-hidden rounded-lg bg-white shadow">
										<div className="p-6">
											{/* Your content */}
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</main>
				<footer>
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
						<div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
							<span className="block sm:inline">
								&copy; 2023 Croc Studios.
							</span>{" "}
							<span className="block sm:inline">
								All rights reserved.
							</span>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}
