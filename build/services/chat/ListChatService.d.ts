declare class ListChatService {
    execute(): Promise<{
        message: string;
        chatUser_id: string;
        name_user: string;
    }[]>;
}
export { ListChatService };
