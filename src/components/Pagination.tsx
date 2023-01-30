import React from "react"
import { Link } from "gatsby"
import { PaginationProps } from "../types"

const Pagination: React.FC<PaginationProps> = ({
	pagination,
	pathPrefix = "blog",
}) => {
	const { currentPage, numPages, limit, skip, totalPosts } = pagination

	return (
		<nav
			className="flex items-center justify-between my-4"
			aria-label="Pagination"
		>
			<div className="hidden sm:block">
				<p className="text-sm">
					Showing{" "}
					<span className="font-medium">{skip === 0 ? 1 : skip}</span>{" "}
					to{" "}
					<span className="font-medium">
						{totalPosts < limit ? totalPosts : skip + limit}
					</span>{" "}
					of <span className="font-medium">{totalPosts}</span> posts
				</p>
			</div>
			<div className="flex-1 flex justify-between sm:justify-end">
				{currentPage > 1 ? (
					<Link
						to={`/${pathPrefix}/${
							currentPage === 2 ? "" : currentPage - 1
						}`}
						className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
					>
						Previous
					</Link>
				) : null}
				{currentPage < numPages ? (
					<Link
						to={`/${pathPrefix}/${currentPage + 1}`}
						className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
					>
						Next
					</Link>
				) : null}
			</div>
		</nav>
	)
}

export default Pagination
