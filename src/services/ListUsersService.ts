import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {  instanceToPlain } from "class-transformer"

class ListUsersService {
    async execute() {
        const userRespositories = getCustomRepository(UsersRepositories)

        const users = await userRespositories.find({ where: { admin: false } })

        return instanceToPlain(users)
    }
}

export { ListUsersService }