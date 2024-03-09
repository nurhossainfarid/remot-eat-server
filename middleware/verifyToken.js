import jwt from "jsonwebtoken"
import { promisify } from 'util';

/* 
1. check if token is exists
2. if not send res
3. decoded token
4. if valid next
*/

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(' ')?.[1];
        if (!token) {
            return res.status(401).json({
                status: "Failed",
                error: "You are not login"
            })
        };
        req.user = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET);
        next();
    } catch (error) {
        res.status(401).json({
            status: "Failed",
            error: "Invalid token"
        })
    }
}