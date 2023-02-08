import type { Request, Response } from "express"
import { hashPassword } from "../../utils/auth";
import { connection, createNewUser } from "../../utils/db";

const handler = async (req: Request, res: Response) => {
    const { email, password, firstName, lastName } = req.body

    const hashedPassword = await hashPassword(password)

    const sanitizedEmail = email.replace(/(<([^>]+)>)/ig, '')

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/

    // check if email is valid
    if (!emailPattern.test(sanitizedEmail)) {
        return res.status(400).json({
            message: 'Invalid Email Address',
        })
    }

    const result: any = await createNewUser({
        email: sanitizedEmail,
        password: hashedPassword,
        firstName,
        lastName,
    })
    
    return res.status(200).json({
        message: 'User created successfully',
        result: {
            id: result.insertId,
        }
    })
}

export default handler