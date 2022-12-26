const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/ontest', (req, res) => {
    res.send('on test route');
});

module.exports = router;