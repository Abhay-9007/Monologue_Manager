


const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

async function registerUser(req, res){
    const {username, email, password} = req.body

    if(!username || !email || !password){
        return res.status(400).json({
            message : "All fields are required"
        })
    }

    const isExists = await userModel.findOne({
            email
        }
    )

    if (isExists){
        return res.status(400).json({
            message : "User already exists"
        })
    }

    const user = await userModel.create({
        username, 
        email, 
        password
    })

    const token = jwt.sign({
        email : user.email,
        id : user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).send({
        message : "User Created Successfully",
        user
    })
}



module.exports = {
    registerUser
}