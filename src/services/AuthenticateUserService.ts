import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest{
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne({
            email
        })

        //VERIFICAR SE EXISTE EMAIL
        if(!user){
            throw Error("Email/Password incorrect")
        }

        //VERIFICAR SE A SENHA ESTA CORRETA

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw Error("Email/Password incorrect")
        }

        // GERAR TOKEN
        const token = sign({
            email: user.email
        }, "68907bdc885633e37c227966fe5e1648",{
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}

export { AuthenticateUserService }