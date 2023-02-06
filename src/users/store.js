const User = require("./model")
const { generateToken } = require("../helpers/generateToken")

async function signIn(userName, email, password){
    const user = new User({
        userName: userName,
        email: email,
        password: password,
    })

    user.password = await user.encryptPassword(user.password)
    console.log(["UUUSER", user]);
    
    const token = generateToken(user._id)

    user.save()

    return token
}


function login(email, password){
    return new Promise((resolve,reject)=> {
        User.findOne({email: email}).exec()
        .then((user) => {
            if(!user){
                return reject("Email Incorrecto");
            }

            user.validatePassword(password)
            .then((validPassword) => {
                if(!validPassword){
                    return reject("Contraseña Incorrecta");
                }

                const token = generateToken(user._id);
                return resolve(token);
            });
        });
    });
}


module.exports = {
    signIn,
    login
}
