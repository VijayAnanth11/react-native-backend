const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const attendanceSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    }
})


mongoose.model("Attendance", attendanceSchema);