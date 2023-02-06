const jwt = require("jsonwebtoken")
 
function generateToken(id){

    return jwt.sign({id: id}, process.env.SECRET, {expiresIn: 60*60*24})
}

module.exports = {generateToken}

