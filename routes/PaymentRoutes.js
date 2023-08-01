const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Payment = mongoose.model("Payment");

const jwt = require('jsonwebtoken');
// 
require('dotenv').config();
// 
const bcrypt = require("bcrypt");


router.post('/payment', async (req, res) => {
    console.log('sent by client - ', req.body);
    const { holder, card, expiry} = req.body;
    if (!holder || !card || !expiry) {
        return res.status(422).send({ error: "please fill all the fields" });
    }

    const user = new Payment({
        holder,
        card,
        expiry
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