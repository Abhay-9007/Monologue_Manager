

const jwt = require("jsonwebtoken")
const logModel = require("../models/logs.model")



async function logController(req, res){

    const today = new Date();

    const formatted =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, "0") + "-" +
        String(today.getDate()).padStart(2, "0");

    // console.log(req.body)
    const {log} = req.body

    let decoded

    try{
        const token = req.cookies.token
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).send({
            message : "Unauthorized"
        })
    }
    
    // console.log(decoded)

    const logs = await logModel.create({
        userId : decoded.id,
        date : formatted,
        log : log
    })

    res.status(200).send({
        message : "Log created successfully",
        logs
    })
}



module.exports = {
    logController
}