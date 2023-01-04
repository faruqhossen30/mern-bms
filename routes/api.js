const express = require("express");
const router = express.Router();
// Controller
const ClubAPIController = require('../controller/api/ClubAPIController');


router.get('/ontest', (req, res) => {
    res.send('on test route');
});


// router.get('/clubs', ClubAPIController.index);



module.exports = router;