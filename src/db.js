const db = require("mongoose")

db.Promise = global.Promise;
db.set("strictQuery", false);

async function connect(url){
    await db.connect(url,{
        useNewUrlParser: true,
    })
        .then(()=> ("Connected to MongoDB Atlas"))
        .catch((e)=> console.error(e))
}

module.exports = connect;
