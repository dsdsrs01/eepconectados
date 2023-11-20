import { Request, Response } from 'express'
import { CreateChatService } from '../../services/chat/CreateChatService'

class CreateChatController {
    async handle(req: Request, res: Response) {
        const {message, chatUser_id, name_user} = req.body;

        const messageChatService = new CreateChatService();

         const text = await messageChatService.execute({ 
             message,
             chatUser_id,
             name_user
         })

        return res.json(text);
    }
}

export { CreateChatController }