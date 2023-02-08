import jsonwebtoken from 'jsonwebtoken'

export const createToken = (payload: any) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
}

export const verifyToken = (token: string) => {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET)
}

export const decodeToken = (token: string) => {
    return jsonwebtoken.decode(token)
}

export const getTokenFromHeaders = (headers: any) => {
    const authHeader = headers.authorization
    return authHeader ? authHeader.split(' ')[1] : null
}