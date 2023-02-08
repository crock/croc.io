import type { Request, Response } from "express"
import { verifyToken, getTokenFromHeaders } from "../../utils/jwt";
import { getUser } from "../../utils/db";

const handler = async (req: Request, res: Response) => {
    const token = getTokenFromHeaders(req.headers)

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const tokenPayload = await verifyToken(token)

    if (!tokenPayload || typeof tokenPayload === 'string') {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const results = await getUser(tokenPayload.sub)

    if (!results) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const { password, ...other } = results[0]

    res.status(200).json(other)
}

export default handler