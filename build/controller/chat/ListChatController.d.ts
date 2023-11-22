import { Request, Response } from 'express';
declare class ListChatController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { ListChatController };
