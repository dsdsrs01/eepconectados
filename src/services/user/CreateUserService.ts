import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface UserRequest {
    name: string;
    email: string;
    password: string
}

class CreateUserService {
    async execute({ email, name, password }: UserRequest) {
       if(!email) {
            throw new Error("Email não valido!")
       }

       const userAlreadyExits = await prismaClient.users.findFirst({
            where: {
                email: email,
                name: name,
                password: password
            }
       })

       if(userAlreadyExits) {
            throw new Error('User alread exists!')
       }

       const passwordHask = await hash(password, 8)

       const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password
            },
            select: {
                id: true,
                name: true,
                email: true
            }
       })

       return user;
    }
}

export { CreateUserService }