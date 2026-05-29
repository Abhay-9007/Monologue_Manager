
const jwt = require("jsonwebtoken")

const userModel = require("../models/user.model")


async function loginController(req, res){
   // res.send("Login")

    const {username, email, password} = req.body

    const user = await userModel.findOne({
        email
    })

    if (!user) {
        return res.status(400).send({
            message: "User not found"
        })
    }

    // console.log(user)
    // console.log(username,password)

    if (user.username !== username) {
        return res.status(400).send({
            message: "Wrong username"
        })
    }

    if (user.password !== password ) {
        return res.status(400).send({
            message: "Wrong password"
        })
    }



    if (user){
        const token = jwt.sign({
            email : user.email,
            id : user._id
        }, process.env.JWT_SECRET)

        res.cookie("token", token)

        return res.status(200).send({
            message : "Login Successfull"
        })
    }
    else{
        return res.status(400).send({
            message : "Login Failed"
        })
    }
}


module.exports = {
    loginController
}