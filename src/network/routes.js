const express = require("express")
const jphData = require("../jspData/network")
const users = require("../users/network")

const routes = function(server){
    server.use("/api/jphdata", jphData),
    server.use("/api/users", users)
}

module.exports = routes