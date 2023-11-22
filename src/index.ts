import { Router, Response, Request } from 'express'

import { CreateUserController } from './controller/user/CreateUserController'
import { AuthUserController } from './controller/user/AuthUserController'
import { ListUserController } from './controller/user/ListUserController'
import { CreateChatController } from './controller/chat/CreateChatController'
import { ListChatController } from './controller/chat/ListChatController'

import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router()

router.post('/users', new AuthUserController().handle)

router.post('/session', new CreateUserController().handle)

router.get('/list', new ListUserController().handle)

router.post('/message', isAuthenticated, new CreateChatController().handle)

router.get('/message/list', isAuthenticated, new ListChatController().handle)

router.get('/teste1', (req: Request, res: Response) => {
    return res.json({ name: 'Yuri Batista' })
})

export { router }