require('dotenv').config();
const jwt = require('jsonwebtoken')
const JWT_User_Key = process.env.JWT_User_Key

async function userMiddleware(req,res,next){
    const token = req.headers.authorization;
    const valid = await jwt.verify(token, JWT_User_Key);

    if(valid) {
        req.userId = valid.userId;
        next();
    }
    else{
        res.status(400).json({
            'message' : 'Signin again'
        })
    }
}

module.exports = {
    userMiddleware
}