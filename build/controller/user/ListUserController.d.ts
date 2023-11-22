import { Request, Response } from 'express';
declare class ListUserController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { ListUserController };
