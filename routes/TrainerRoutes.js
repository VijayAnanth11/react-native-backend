const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Trainer = mongoose.model("Trainer");

const jwt = require('jsonwebtoken');
// 
require('dotenv').config();
// 
const bcrypt = require("bcrypt");


router.post('/trainer', async (req, res) => {
    console.log('sent by client - ', req.body);
    const { name, ic, address, mobile, gender} = req.body;
    if (!name || !ic || !address || !mobile || !gender) {
        return res.status(422).send({ error: "please fill all the fields" });
    }

    const user = new Trainer({
        name,
        ic,
        address,
        mobile,
        gender
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