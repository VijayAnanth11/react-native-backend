const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const healthSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        unique: true,
        required: true
    }
})


mongoose.model("Health", healthSchema);