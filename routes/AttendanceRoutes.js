const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Attendance = mongoose.model("Attendance");

const jwt = require('jsonwebtoken');
// 
require('dotenv').config();
// 
const bcrypt = require("bcrypt");


router.post('/attendance', async (req, res) => {
    console.log('sent by client - ', req.body);
    const { date, time, name} = req.body;
    if (!date || !time || !name) {
        return res.status(422).send({ error: "please fill all the fields" });
    }

    const user = new Attendance({
        date,
        time,
        name
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