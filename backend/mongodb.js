const mongoose = require("mongoose")

//mongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/momenta").then(() => {
    console.log("MongoDB connected")
}).catch((e) => {
    console.log("MongoDB connection error!")
})



//------Registration data schema start------
const infoSchema = {
    Event: {
        type: String,
        required: true
    },
    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
    },
    Email: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
    },
    City: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    Zip: {
        type: Number,
        required: true
    },
    Guest: {
        type: Number,
        required: true
    }
};
//Schema model
const Info = new mongoose.model("Info", infoSchema)

//------registration data schema end------





//-------- Login & signup schema start-------------

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = new mongoose.model("User", LoginSchema)

//-------- Login & signup schema end----------------



module.exports = { Info, User }