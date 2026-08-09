require('dotenv').config();
const jwt = require('jsonwebtoken')
const JWT_Tutor_Key = process.env.JWT_Tutor_Key;

async function tutorMiddleware(req,res,next){
    const token = req.headers.authorization;
    const valid = jwt.verify(token, JWT_Tutor_Key);

    if(valid){
        req.tutorId = valid.tutorId;
        next();
    }
    else{
        res.status(400).json({
            'message' : 'Signin again'
        })
    }
}

module.exports = {
    tutorMiddleware
}