
const jwt = require("jsonwebtoken")
const logModel = require("../models/logs.model")
const userModel = require("../models/user.model")


async function searchController(req, res){

    
    const today = new Date();
    
    const todaysDate =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

    if (!req.body){
        return res.status(400).send(
            {
                message : "Please enter a date",
            }
        )
    }
    
    let {userInputDate, userInputText} = req.body

    

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
    if (userInputText !== undefined && userInputText !== "") {
        
        const data = await logModel.find({
            userId: decoded.id,

            $or: [
                { log: { $regex: userInputText, $options: "i" } },
                { special: { $regex: userInputText, $options: "i" } },
                { weekly_task: { $regex: userInputText, $options: "i" } },
                { mood: { $regex: userInputText, $options: "i" } }
            ]
        });
        return res.send(data)
    }
    if (userInputDate === undefined || userInputDate === "") {
        // userInputDate = todaysDate
        const data = await logModel.find({
            userId : decoded.id
    })
        return res.send(
            {
                message : "Please enter a date",
                data : data
            }
        )
    }
    const data = await logModel.find({
            date : userInputDate,
            userId : decoded.id
    })
    if (data.length === 0) {
        return res.status(400).send({
            message : "No data found"
        })
    }
    res.send(data)
    // let bodyshit = req.body
    // res.send("Hello")
}


module.exports = {
    searchController
}
