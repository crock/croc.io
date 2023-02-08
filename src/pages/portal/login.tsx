import React, { useState } from 'react';
import { Portal } from "../../layouts/"
import axios from 'axios'
import { navigate } from 'gatsby';

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            email,
            password
        }

        try {
            const res = await axios.post("http://localhost:3000/api/auth/login", data)
            
			if (res.status === 200) {
				const { token } = res.data
				localStorage.setItem("token", token)
				await navigate("/portal")
			}
        } catch (err) {
            console.log(err)
        }
    }

	return (
		<Portal>
			<form method="post">
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
			<title>Login - Croc Studios</title>
			<meta
				name="description"
				content="A one-man software development and design studio based in the US. We build web and mobile applications for people and businesses."
			/>
		</>
	)
}

export default LoginPage
