import prismaClient from "../../prisma"

class ListChatService {
    async execute() {
        const chat = await prismaClient.chat.findMany({
            select: {
                message: true,
                chatUser_id: true,
                name_user: true
            }
        })

        return chat;
    }
}

export { ListChatService }