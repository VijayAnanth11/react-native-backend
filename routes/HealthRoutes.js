const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Health = mongoose.model("Health");

const jwt = require('jsonwebtoken');
// 
require('dotenv').config();
// 
const bcrypt = require("bcrypt");


router.post('/health', async (req, res) => {
    console.log('sent by client - ', req.body);
    const { date, name, condition} = req.body;
    if (!date || !name || !condition) {
        return res.status(422).send({ error: "please fill all the fields" });
    }

    const user = new Health({
        date,
        name,
        condition
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