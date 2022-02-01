import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // RECEBER TOKEN
    const authToken = request.headers.authorization

    // VALIDAR SE TOKEN ESTÁ PREENCHIDO
    if (!authToken) {
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ")
    try {
        // VALIDAR SE TOKEN É VALIDO
        const { sub } = verify(token, "68907bdc885633e37c227966fe5e1648") as IPayload

        // RECUPERAR INFORMAÇÕES DO USUÁRIO
        request.user_id = sub
        return next()
    } catch {
        return response.status(401).end()
    }

}