interface MessageRequest {
    message: string;
    chatUser_id: string;
    name_user: string;
}
declare class CreateChatService {
    execute({ message, chatUser_id, name_user }: MessageRequest): Promise<{
        id: string;
        message: string;
        chatUser_id: string;
        name_user: string;
    }>;
}
export { CreateChatService };
