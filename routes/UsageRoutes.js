const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Usage = mongoose.model("Usage");

const jwt = require('jsonwebtoken');
// 
require('dotenv').config();
// 
const bcrypt = require("bcrypt");


router.post('/usage', async (req, res) => {
    console.log('sent by client - ', req.body);
    const { users, trainers, month, revenue, cost} = req.body;
    if (!users || !trainers || !month || !revenue || !cost) {
        return res.status(422).send({ error: "please fill all the fields" });
    }

    const user = new Usage({
        users,
        trainers,
        month,
        revenue,
        cost
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