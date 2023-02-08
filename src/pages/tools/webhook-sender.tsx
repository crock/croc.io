import React, { useState } from "react"
import PayloadParameterInputPair from "../../components/PayloadParameterInputPair"
import axios from "axios"
import { Layout } from "../../layouts/"

const timer = (ms: number) => new Promise((res) => setTimeout(res, ms))

const initialParams = { A: { name: "", value: "" } }
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

const WebhookSender = () => {
	const [webhookUrl, setWebhookUrl] = useState("")
	const [contentType, setContentType] = useState("application/json")
	const [params, setParams] = useState(initialParams)
	const [status, setStatus] = useState("")

	const setParameterName = (letter: string, value: string) => {
		let paramsCopy = { ...params }
		paramsCopy[letter] = { ...params[letter], name: value }
		setParams(paramsCopy)
	}

	const setParameterValue = (letter: string, value: string) => {
		let paramsCopy = { ...params }
		paramsCopy[letter] = { ...params[letter], value: value }
		setParams(paramsCopy)
	}

	const addParameterGroup = (e) => {
		e.preventDefault()
		let paramKeys = Object.keys(params)
		const newLetter = letters[paramKeys.length]
		if (newLetter === "A" || newLetter === undefined) {
			setParams(initialParams)
			return
		}
		setParameterName(newLetter, "")
		setParameterValue(newLetter, "")
	}

	const deleteParameterGroup = (e) => {
		e.preventDefault()
		let paramKeys = Object.keys(params)
		const lastKey = paramKeys.pop()
		if (lastKey === "A" || lastKey === undefined) {
			setParams(initialParams)
			return
		}
		let paramsCopy = { ...params }
		delete paramsCopy[lastKey]
		setParams(paramsCopy)
	}

	const triggerWebhook = async (e) => {
		e.preventDefault()
		if (webhookUrl.startsWith("http")) {
			let payload = {}
			for (let key in params) {
				payload[params[key].name] = params[key].value
			}
			try {
				const response = await axios.post(webhookUrl, payload, {
					headers: { "Content-Type": contentType },
				})
				if (response.status === 200 || response.status === 204) {
					setStatus("Successfully triggered the webhook!")
					await timer(2000)
				}
			} catch (e) {
				console.error(e)
				setStatus("Something went wrong with the request.")
			} finally {
				setWebhookUrl("")
				setParams(initialParams)
				setContentType("application/json")
			}
		}
	}

	return (
		<Layout>
			<h1 className="font-black text-3xl mb-4">Webhook Sender</h1>
			<p className="font-light text-lg">Easily send webhooks.</p>

			<form className="my-8">
				<label className="flex flex-col mb-2">
					<span className="font-bold mb-1">Request URL:</span>
					<input
						className="block placeholder-slate-300"
						type="text"
						placeholder="https://discord.com/api/webhooks/564208833581285378/v5gYTF17g17"
						defaultValue={webhookUrl}
						value={webhookUrl}
						onChange={(e) => setWebhookUrl(e.target.value)}
					/>
				</label>

				<label className="flex flex-col mb-2">
					<span className="font-bold mb-1">
						Payload Content Type:
					</span>
					<select
						id="contentType"
						name="contentType"
						className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-black sm:text-sm rounded-md"
						value={contentType}
						onChange={(e) => setContentType(e.target.value)}
					>
						<option value={`application/json`}>
							application/json
						</option>
						<option value={`application/x-www-form-urlencoded`}>
							application/x-www-form-urlencoded
						</option>
					</select>
				</label>

				<div className="flex flex-col mb-2">
					<span className="font-bold mb-1">Payload Parameters:</span>
					<div className="grid grid-cols-2 gap-1 w-[100px]">
						<button
							onClick={addParameterGroup}
							type="button"
							title="Add Parameter Group"
							className="text-black bg-gray-400 hover:bg-gray-500 py-2 px-3 font-semibold text-xl"
						>
							+
						</button>
						<button
							onClick={deleteParameterGroup}
							type="button"
							title="Delete Parameter Group"
							className="text-black bg-gray-400 hover:bg-gray-500 py-2 px-3 font-semibold text-xl"
						>
							-
						</button>
					</div>

					<div className="w-1/2 flex flex-col">
						{Object.keys(params).map((key, index) => (
							<PayloadParameterInputPair
								key={key}
								parameters={params[key]}
								pairId={key}
								setParameterName={setParameterName}
								setParameterValue={setParameterValue}
							/>
						))}
					</div>
				</div>

				<div className="flex flex-row flex-nowrap">
					<button
						onClick={triggerWebhook}
						title="Trigger webhook locally"
						className="mt-6 bg-primary hover:bg-primary-dark py-2 px-3 rounded text-white font-semibold mr-2"
					>
						Trigger webhook
					</button>
				</div>

				<p className="font-semibold text-lg my-3 text-green-500">
					{status}
				</p>
			</form>
		</Layout>
	)
}

export const Head = () => {
	return (
		<>
			<html lang="en" />
			<body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white" />
			<title>Webhook Sender | Tools | Croc Studios</title>
			<meta name="description" content="Easily send data to webhooks." />
		</>
	)
}

export default WebhookSender
