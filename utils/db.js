const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI
const connectDb = async () => {
    try{
        await mongoose.connect(URI)
        console.log("connection successfully made to database");
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDb;