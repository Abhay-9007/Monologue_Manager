const mongoose = require("mongoose")

const logSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userModel",
        required : true
    },
    date : {
        type : String,
        required : true
    },
    log : {
        type : String
    }
})

const logModel = mongoose.model("logModel", logSchema)


module.exports = logModel
