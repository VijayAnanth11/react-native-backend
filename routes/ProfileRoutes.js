const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Profile = mongoose.model("Profile");

const jwt = require('jsonwebtoken');
// 
require('dotenv').config();
// 
const bcrypt = require("bcrypt");


router.post('/profile', async (req, res) => {
    console.log('sent by client - ', req.body);
    const { name, ic, address, mobile} = req.body;
    if (!name|| !ic || !address || !mobile) {
        return res.status(422).send({ error: "please fill all the fields" });
    }

    const user = new Profile({
        name,
        ic,
        address,
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