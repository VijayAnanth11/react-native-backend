const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const usageSchema = new mongoose.Schema({
    users: {
        type: String,
        required: true,
    },
    trainers: {
        type: String,
        required: true
    },
    month: {
        type: String,
        unique: true,
        required: true
    },
    revenue: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
})


mongoose.model("Usage", usageSchema);