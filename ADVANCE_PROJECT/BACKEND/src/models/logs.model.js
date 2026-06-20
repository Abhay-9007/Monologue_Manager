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
    log : [{
        type : String
    }],
    special : [{
        type : String
    }],
    weekly_task : [{
        type : String
    }],
    mood : {
        type : String
    },
    expense: {
        type: Map,
        of: Number   
    }
})

const logModel = mongoose.model("logModel", logSchema)


module.exports = logModel