import { Request, Response } from 'express';
declare class CreateChatController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateChatController };
