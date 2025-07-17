const mongoose = require("mongoose");


const connectDB = async() => {
    const URI = process.env.MONGO_URI
    console.log("URI of mongo db:",URI);

    try {

        await mongoose.connect(URI);
        console.log("Connection gets successful");

    } catch (error) {
        console.log("error in connecting the db",error);
    }
}

module.exports = connectDB;