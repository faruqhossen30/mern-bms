const express = require("express");
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../models/User");
const Admin = require('../models/Admin');
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const { runValidation } = require("../validations");
const { adminCreateValidator, adminLoginValidator } = require("../validations/admin");
const teams = require('../db/teams');

// Current User information
router.get("/user", auth, async (req, res) => {
    const profile = await User.findById(req.user._id);
    res.send(profile);
});

//Login Route
router.post("/login", async (req, res) => {
    const { email, password } = await req.body;
    let user = await User.findOne({ $or:[{username: email}, {email: email}]});

    if (!user){
        return res.status(400).send("Invalid email or username");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        return res.status(400).json('wrong password');
    }

    // Generate Token
    // const jwtData = { _id: user._id, name: user.name };
    const jwtData = {user };
    const token = jwt.sign(jwtData, process.env.JWTSECRET, { expiresIn: "30d" });

    res.send(token);
});

// Register User
router.post("/register", async (req, res) => {
    try {
        const { email, name, username, password } = req.body;

        // Checking User
        let user = await User.findOne({ email });
        if (user) return res.status(400).send("User already exists");
        // Salt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassed = await bcrypt.hash(req.body.password, salt);

        // Save User Into Database
        user = new User({ email, name,username, password:hashedPassed });
        await user.save();

        // Generate Token
        // const jwtData = { _id: user._id, name: user.name };
        const jwtData = { user };
        const token = jwt.sign(jwtData, process.env.JWTSECRET, { expiresIn: "30d" });

        res.send(token);
    } catch (err) {
        return res.json(err)
    }
});

// Current User information
router.get("/admin", auth, async (req, res) => {
    const profile = await Admin.findById(req.user._id);
    res.send(profile);
})

//Admin Login 
router.post("/admin/login", adminLoginValidator, runValidation, async (req, res) => {
    try {
        const { email, password } = req.body;
        let admin = await Admin.findOne({ email});
        if (!admin){
            return res.status(400).send("Invalid email or username");
        }

        const validPassword = await bcrypt.compare(password, admin.password);
        if(!validPassword){
            return res.status(400).json('wrong password');
        }
        // Generate Token
        const jwtData = { _id: admin._id, name: admin.name };
        const token = jwt.sign(jwtData, process.env.JWTSECRET, { expiresIn: "2h" });
        return res.send(token);

    } catch (error) {
        return res.json(error)
    }
});

// Admin Create 
router.post("/admin/create", adminCreateValidator, runValidation, async (req, res) => {

    try {
        const { name, username, email, mobile, password } = req.body;

        // Checking Admin by Email
        let adminEmail = await Admin.findOne({ email });
        if (adminEmail) return res.status(400).send("This email already use with another admin");
        // Checking Admin by username
        let adminUsername = await Admin.findOne({ username });
        if (adminUsername) return res.status(400).send("This username already use with another admin");

        const salt = await bcrypt.genSalt(10);
        const hashedPassed = await bcrypt.hash(req.body.password, salt);

        // Save User Into Database

        const admin = new Admin({ name, username, email, mobile, password: hashedPassed });
        await admin.save();

        // Generate Token
        // const jwtData = { _id: user._id, name: user.name };
        // const token = jwt.sign(jwtData, process.env.JWTSECRET, { expiresIn: "2h" });

        res.send(admin);
    } catch (err) {
        return res.json(err)
    }
});

module.exports = router;
