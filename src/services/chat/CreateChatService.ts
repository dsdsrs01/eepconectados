import prismaClient from "../../prisma";

interface MessageRequest {
    message: string;
    chatUser_id: string;
    name_user: string;
}

class CreateChatService {
    async execute({message, chatUser_id, name_user}: MessageRequest) {
        const text = await prismaClient.chat.create({
            data: {
                message: message,
                chatUser_id: chatUser_id,
                name_user: name_user
            },
            select: {
                id: true,
                message: true,
                chatUser_id: true,
                name_user: true
            }
        })

        return text;
    }
}

export { CreateChatService }