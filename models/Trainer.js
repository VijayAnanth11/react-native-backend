const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ic: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
})


mongoose.model("Trainer", trainerSchema );