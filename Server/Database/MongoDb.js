const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/SunVest')
.then (()=>{
    console.log("Database connected")
})
.catch((err)=>{
    console.log("Failed to connect to Database:" , err);
})

module.exports = mongoose.connection