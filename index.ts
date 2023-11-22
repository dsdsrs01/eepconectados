import { Router, Response, Request } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.json({ name: 'Yuri Batista' })
})


export { router }