import type { Request, Response } from "express"
import { comparePassword, hashPassword } from "../../utils/auth";
import { connection, loginUser } from "../../utils/db";
import { createToken } from "../../utils/jwt";
import { adminEmails } from "../../utils/constants";

const handler = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const hashedPassword = await hashPassword(password)

    const passwordsMatch = await comparePassword(password, hashedPassword)

    if (!passwordsMatch) {
        return res.status(400).json({
            message: 'Login Unsuccessful',
        })
    }

    const sanitizedEmail = email.replace(/(<([^>]+)>)/ig, '')

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/

    // check if email is valid
    if (!emailPattern.test(sanitizedEmail)) {
        return res.status(400).json({
            message: 'Invalid Email Address',
        })
    }

    const results: any = await loginUser(sanitizedEmail)

    if (results.length === 0) {
        return res.status(400).json({
            message: 'User not found',
        })
    }

    const user = results[0]

    const userRole = adminEmails.includes(user.email) ? 'Admin' : "User"

    const tokenPayload = {
        sub: user.id,
        email: user.email,
        aud: userRole
    }

    const token = createToken(tokenPayload)

    return res.status(200).json({
        message: 'Login Successful',
        token,
    })
}

export default handler