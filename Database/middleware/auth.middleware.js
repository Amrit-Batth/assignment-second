import { verifyToken } from "../../utils/auth.utils.js";

export const performAuthorization = (req,res,next)=>{
    const token = req.headers.authorization
    console.log("hi",token)
    

    if(!token) {
        res.status(403).json("token is missing in the authorization header");
    }

    const data = verifyToken(token);
    console.log('data :>> ', data);
    if(!data) {
        return res.status(403).json("token is expired or invalid");
    }

    req.auth = data.user;

    next();


}