const jwt = require("jsonwebtoken")

function verifyToken(req, res, next) {
    const token = req.headers["Authorization"]
    if(!token){
        return res.status(401).json({
            auth:false,
            message: "No token provided"
        })
    }
    
    const decoded = jwt.verify(token, "secretpassword")

    req.userId = decoded.id

    next()
}

module.exports = {verifyToken}