declare class ListUserService {
    execute(): Promise<{
        email: string;
        name: string;
        id: string;
    }[]>;
}
export { ListUserService };
