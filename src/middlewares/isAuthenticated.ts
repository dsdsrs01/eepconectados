import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if(!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" "); //Ignora o primeiro item e chama o segundo de token

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        req.user_id = sub;
        
        return next();

    }catch(err){
        return res.status(401).end();
    }
}