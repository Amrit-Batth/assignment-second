export const validatePost = async(req,res,next)=>{

        if(!req.body.content) {
            return res.status(400).json({message:"post contentis required"})
        }
        if(req.body.content.length > 32) {
            return res.status(400).json({message:"Content only required less than 32 characters"})
        }
    
        next();
}