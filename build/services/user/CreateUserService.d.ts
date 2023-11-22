interface UserRequest {
    name: string;
    email: string;
    password: string;
}
declare class CreateUserService {
    execute({ email, name, password }: UserRequest): Promise<{
        email: string;
        name: string;
        id: string;
    }>;
}
export { CreateUserService };
