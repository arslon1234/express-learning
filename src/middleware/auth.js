import jwt from 'jsonwebtoken'

export const authMiddleware =(req, res, next)=>{
    try{
        const [type,token] = req.headers.authorization.split(" ")
        if(type !== 'Bearer'){
            res.status(401).send('Unauthorized')
        }
        const data = jwt.verify(token, "dasdadad231")
        req.user = data
        next()
        
    }catch(err){
        next(err)
    }
}