import React, { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { toInteger } from "lodash"

const PasswordGenerator = () => {
	const [pwdLength, setPwdLength] = useState(12)
	const [includeNumbers, setIncludeNumbers] = useState(false)
	const [includeSymbols, setIncludeSymbols] = useState(false)
	const [password, setPassword] = useState("")

	const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const numbers = "0123456789"
	const symbols = "!@#$%^&*=-_+"

	const generatePassword = () => {
		let characters = ""

		characters += letters
		if (includeNumbers) characters += numbers
		if (includeSymbols) characters += symbols

		let pwd = ""
		for (var i = 0; i < pwdLength; i++) {
			pwd += characters.charAt(
				Math.floor(Math.random() * characters.length)
			)
		}

		setPassword(pwd)
	}

	return (
		<>
			<h1 className="font-black text-3xl mb-4">Password Generator</h1>
			<p className="font-light text-lg">
				Securely and privately generate a random, strong password.
			</p>

			<div>
				<label className="flex flex-col mb-2">
					<span className="font-bold mb-1">Length:</span>
					<input
						className="form-input block text-black"
						type="number"
						defaultValue={pwdLength}
						onChange={(e) =>
							setPwdLength(toInteger(e.target.value))
						}
					/>
				</label>

				<label className="flex flex-row items-center mb-2">
					<input
						className="form-input block"
						type="checkbox"
						defaultChecked={includeNumbers}
						onChange={(e) => setIncludeNumbers(e.target.checked)}
					/>
					<span className="font-bold ml-1">Include numbers</span>
				</label>

				<label className="flex flex-row items-center mb-2">
					<input
						className="form-input block"
						type="checkbox"
						defaultChecked={includeSymbols}
						onChange={(e) => setIncludeSymbols(e.target.checked)}
					/>
					<span className="font-bold ml-1">Include symbols</span>
				</label>
			</div>

			<button
				onClick={generatePassword}
				title="Generate Random Password"
				className="bg-primary hover:bg-primary-dark py-2 px-3 rounded text-white font-semibold"
			>
				Generate
			</button>

			<div className="my-2">
				<input
					className="form-input block w-full text-black"
					type="text"
					value={password}
					readOnly
				/>
			</div>

			<CopyToClipboard
				text={password}
				title="Copy generated password to clipboard"
				className="bg-gray-300 hover:bg-gray-400 py-2 px-3 rounded text-black font-semibold"
			>
				<span>Copy to clipboard</span>
			</CopyToClipboard>

			<button
				className="text-black dark:text-white py-2 px-3 font-semibold"
				onClick={(e) => setPassword("")}
			>
				Clear Field
			</button>
		</>
	)
}

export const Head = () => {
	return (
		<>
			<body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white" />
			<title>Password Generator | Tools | Croc Studios</title>
			<meta
				name="description"
				content="Securely and privately generate a random, strong password."
			/>
		</>
	)
}

export default PasswordGenerator
