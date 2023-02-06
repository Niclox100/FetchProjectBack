const express = require("express")
const jwt = require("jsonwebtoken")

const controller = require("./controller")
const User = require("./model")

const router = express.Router()


router.post("/signin", async (req, res)=> {

    const {userName, email, password} = req.body

    const token = await controller.signIn(userName, email, password)

    res.json({auth: true, token,})
})

router.post("/login", async (req, res)=> {

    const { email, password } = req.body

     await controller.login(email, password)
        .then((token)=> {
            res.cookie('token',token , { maxAge: 900000, httpOnly: true, path:"/", sameSite: "none"});
            res.json({auth: true, token,})
        })
        .catch(e => {
            res.json("Informacion Incorrecta"),
            console.log(e);
        })
})

router.get("/info", async (req, res)=> {

    const decoded = jwt.verify(req.headers["authorization"], process.env.SECRET)
    const userId = decoded.id
    
    const user = await User.findById(userId, {password: 0})

    res.send(user)

})


module.exports = router