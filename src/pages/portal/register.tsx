import React, { useState } from 'react';
import { Portal } from "../../layouts/"
import axios from 'axios'

const RegisterPage = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirm, setEmailConfirm] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email !== emailConfirm) {
            alert("Emails do not match.")
            return
        }

        if (password !== passwordConfirm) {
            alert("Passwords do not match.")
            return
        }

        const data = {
            firstName,
            lastName,
            email,
            password
        }

        try {
            const res = await axios.post("http://localhost:3000/api/auth/register", data)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

	return (
		<Portal>
			<form method="post">
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col mb-2">
						<label htmlFor="firstName" className="text-black mb-2">
							First Name
						</label>
						<input
                            onChange={e => setFirstName(e.target.value)}
							type="text"
							name="firstName"
							id="firstName"
							className="form-input"
						/>
					</div>

					<div className="flex flex-col mb-2">
						<label htmlFor="lastName" className="text-black mb-2">
							Last Name
						</label>
						<input
                            onChange={e => setLastName(e.target.value)}
							type="text"
							name="lastName"
							id="lastName"
							className="form-input"
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col mb-2">
						<label htmlFor="email" className="text-black mb-2">
							Email
						</label>
						<input
                            onChange={e => setEmail(e.target.value)}
							type="email"
							name="email"
							id="email"
							className="form-input"
						/>
					</div>
                    <div className="flex flex-col mb-2">
						<label htmlFor="emailConfirm" className="text-black mb-2">
							Confirm Email
						</label>
						<input
                            onChange={e => setEmailConfirm(e.target.value)}
							type="email"
							name="emailConfirm"
							id="emailConfirm"
							className="form-input"
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col mb-2">
						<label htmlFor="password" className="text-black mb-2">
							Password
						</label>
						<input
                            onChange={e => setPassword(e.target.value)}
							type="password"
							name="password"
							id="password"
							className="form-input"
						/>
					</div>
                    <div className="flex flex-col mb-2">
						<label htmlFor="passwordConfirm" className="text-black mb-2">
							Confirm Password
						</label>
						<input
                            onChange={e => setPasswordConfirm(e.target.value)}
							type="password"
							name="passwordConfirm"
							id="passwordConfirm"
							className="form-input"
						/>
					</div>
				</div>

				<input
                    onClick={handleSubmit}
					type="submit"
					value="Submit"
					className="bg-green-500 hover:bg-green-400 font-semibold text-sm uppercase text-white py-2 px-3 rounded-sm shadow-sm mt-3"
				/>
			</form>
		</Portal>
	)
}

export const Head = () => {
	return (
		<>
			<html lang="en" className="h-full bg-gray-100" />
			<body className="h-full" />
			<title>Register - Croc Studios</title>
			<meta
				name="description"
				content="A one-man software development and design studio based in the US. We build web and mobile applications for people and businesses."
			/>
		</>
	)
}

export default RegisterPage
