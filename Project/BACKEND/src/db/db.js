const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb+srv://monologue:WWvhYKZPHiOVvhVr@monologue.170qiam.mongodb.net/abhay9007');
    console.log("Connected to DB");
}

module.exports = connectDB;
