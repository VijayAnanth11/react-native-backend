const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const ScheduleUser = mongoose.model("ScheduleUser");

const jwt = require('jsonwebtoken');
// 
require('dotenv').config();
// 
const bcrypt = require("bcrypt");


router.post('/scheduleuser', async (req, res) => {
    console.log('sent by client - ', req.body);
    const { name, mobile} = req.body;
    if (!name|| !mobile) {
        return res.status(422).send({ error: "please fill all the fields" });
    }
    const user = new ScheduleUser({
        name,
        mobile
    })

    try {
        await user.save();
        res.send({ user });
    }
    catch (err) {
        console.log('db err', err);
    }
})

module.exports = router;