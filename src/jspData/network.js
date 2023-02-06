const express = require("express")
const response = require("../network/response")

const router = express.Router()


router.get("/posts" ,async (req, res)=> {

    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        
        .catch(error => {
            response.error(req, res, "Error inesperado", 500, error)
        })
    
   response.success(req, res, posts, 200, "Posts get exitoso")
})

router.get("/photos", async (req, res)=> {

    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    const photos = await fetch("https://jsonplaceholder.typicode.com/photos")
        .then(data => data.json())
        .catch(error => {
            response.error(req, res, "Error inesperado", 500, error)
        })
        

    const paginatedResponse = photos.slice(offset, offset + limit);
    
    response.success(req, res, paginatedResponse, 200, "Photos Get Exitoso")
})

module.exports = router