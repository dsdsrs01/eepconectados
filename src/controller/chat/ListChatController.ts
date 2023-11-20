import { Request, Response } from 'express'
import { ListChatService } from '../../services/chat/ListChatService'

class ListChatController {
    async handle(req: Request, res: Response) {
        const listChatService = new ListChatService();

        const chat = await listChatService.execute();

        return res.json(chat)
    }
}

export{ ListChatController }