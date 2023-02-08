import type { Request, Response } from "express"
import { verifyToken, getTokenFromHeaders } from "../../utils/jwt";

const handler = async (req: Request, res: Response) => {
    const token = getTokenFromHeaders(req.headers)

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const tokenPayload = await verifyToken(token)

    if (!tokenPayload) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    res.status(200).json({
        verified: true
    })
}

export default handler