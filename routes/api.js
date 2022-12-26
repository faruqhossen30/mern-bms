const express = require("express");
const router = express.Router();
const multer = require("multer");
const { body, validationResult } = require('express-validator');
// Controller
const DepositeController = require('../controller/DepositController');
const WidthdrawController = require('../controller/WidthdrawController');
const PaymentGatewayController = require('../controller/PaymentGatewayController');
const OptionController = require('../controller/OptionController');
const GameController = require('../controller/admin/GameController');
const { index, store } = require("../controller/admin/TeamController");
const auth = require("../middleware/auth");
// Validator
const depositValidator = require('../validations/depositValidator');
const widthdrawValidator = require('../validations/widthdrawValidator');
const { runValidation } = require("../validations");
const paymentGatewayValidator = require("../validations/admin/paymentGatewayValidator");
const optionValidator = require("../validations/optionValidator");

// Multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + file.originalname
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

router.get('/games',GameController.index);
router.get('/teams', index);
router.post('/team/store', upload.single('flag'), store);

// Deposit
router.get('/deposites', DepositeController.index);
router.get('/deposit/:id', DepositeController.show);
router.post('/deposit/:id',auth, DepositeController.update);
router.post('/deposite/store', auth,depositValidator.depositStore, runValidation, DepositeController.store);
// Payment Gateways
router.get('/payment-gateways', PaymentGatewayController.index);
router.post('/payment-gateways', auth,paymentGatewayValidator.paymentGateStore,runValidation, PaymentGatewayController.store);
// Options
router.get('/option/get', OptionController.get);
router.post('/option/get', auth, optionValidator.optionSet,OptionController.set);
// Widthdraws
router.get('/widthdraws', WidthdrawController.index);
router.get('/widthdraw/:id', WidthdrawController.show);
router.post('/widthdraw/:id', WidthdrawController.update);
router.post('/widthdraws/store',auth,widthdrawValidator.widthdrawStore, runValidation, WidthdrawController.store);


module.exports = router;