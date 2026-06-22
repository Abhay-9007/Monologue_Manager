
const jwt = require("jsonwebtoken")
const logModel = require("../models/logs.model")
const userModel = require("../models/user.model")


async function dataController(req, res){

    let token, decoded
    try{
        token = req.cookies.token
        decoded = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(decoded)
    }catch(err){
        return res.status(401).send({
            message : "Unauthorized"
        })
    }
    const data = await logModel.find({
            userId : decoded.id
    })
    res.send(data)
}


module.exports = {
    dataController
}
