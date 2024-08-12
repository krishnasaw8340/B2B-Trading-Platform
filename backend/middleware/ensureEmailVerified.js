export const ensureEmailVerified = (req,res,next)=>{
    if(!req.user.isVerified) {
        return res.status(403).json({message: "Please Verify your email before proceeding."})
    }
    next();
}