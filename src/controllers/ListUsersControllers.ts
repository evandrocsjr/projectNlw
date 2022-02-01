import { Request, response, Response } from "express"
import { ListUsersService } from "../services/ListUsersService"

class ListUsersControllers {
    async handle(request: Request, response: Response) {
        const listUsersService = new ListUsersService()

        const users = await listUsersService.execute()

        return response.json(users)
    }
}

export { ListUsersControllers }