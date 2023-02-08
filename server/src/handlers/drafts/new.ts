import type { Request, Response } from "express"
import { createNewDraft } from "../../utils/db";
import { verifyToken, decodeToken, getTokenFromHeaders } from "../../utils/jwt";

const handler = async (req: Request, res: Response) => {
    const { title, content } = req.body
    const token = getTokenFromHeaders(req.headers)

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const tokenPayload = await verifyToken(token)

    if (!tokenPayload) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const { sub } = tokenPayload

    const results: any = await createNewDraft({ title, content, authorId: sub })

    return res.status(200).json({
        message: 'Draft created successfully',
        result: {
            id: results.insertId,
        }
    })


}

export default handler