const jwt = require('jsonwebtoken');

const authorization = (roles)=> {
    return async (req, res, next)=>{
        const token = req.cookies.token;
        if(!token){
            return res.status(403).json({message:'Token expired!'});
        }
        const data = await jwt.verify(token, "wayfair");
        if(roles.length===0 || !data || !roles.includes(data.role)){
            return res.status(403).json({message:'You are not authorization!'});
        }
        next()
        
    }
}
module.exports = { authorization }