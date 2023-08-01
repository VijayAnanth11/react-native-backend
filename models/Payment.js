const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const paymentSchema = new mongoose.Schema({
    holder: {
        type: String,
        required: true,
    },
    card: {
        type: String,
        unique: true,
        required: true
    },
    expiry: {
        type: String,
        required: true
    }
})


mongoose.model("Payment", paymentSchema);