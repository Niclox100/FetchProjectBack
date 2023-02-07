const store = require("./store")


async function signIn(userName, email, password){

    return new Promise(async(resolve, reject)=> {
        if (!userName || !email || !password) {
            reject("Datos de registro incorrectos")
        }
    
        await store.signIn(userName, email, password)
            .then((token)=> resolve(token))
            .catch((e)=> {
                reject(e)
            })
    })
}

async function login(email, password) {
    
    return new Promise(async(resolve, reject)=> {
        if (!email || !password) {
            return reject("No hay email ni contraseña")
        }
        await store.login(email, password)
            .then(token => resolve(token))
            .catch((e)=> {
                reject(e)
            })
    })
}
module.exports = {
    signIn,
    login
}
