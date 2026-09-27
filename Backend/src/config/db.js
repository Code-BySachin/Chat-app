const mongoose = require("mongoose");

async function connectDB(){
    console.log("connecting to mongodb...")
    try{
        const connection = await mongoose.connect("mongodb://localhost:27017/chat-app");
        console.log("successfully connected to MongoDB")
        return connection

    }catch(error){
        console.log("Connection failed: \n", error,"\nERROR MESSAGE", error.message,"\n")
    }


}

module.exports = connectDB;
