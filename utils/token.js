import jwt from "jsonwebtoken"

export const generateToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        password: userInfo.password
    };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: '7days'
    })

    return token;
}