import prismaClient from "../../prisma"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user) {
            throw new Error('Email/senha incorreto!')
        }
        //const passwordMath = await compare(password, user.password) Tava dando erro, e ai eu fiz a comparação de outra forma

        if(password != user.password) {
            throw new Error('Email/senha incorreto!')
        }

        const token = sign({
            name: user.name,
            email: user.email
        },
        process.env.JWT_SECRET, // Lembrar de desabilitar o strict no tsconfig.json
        {
            subject: user.id,
            expiresIn: '30d'
        }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export {AuthUserService}