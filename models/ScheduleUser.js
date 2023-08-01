const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const scheduleUserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    mobile: {
        type: String,
        required: true
    }
})


mongoose.model("ScheduleUser", scheduleUserSchema);