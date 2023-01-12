const express = require("express");
const router = express.Router();
const multer = require("multer");
const { body, validationResult } = require('express-validator');
const auth = require("../middleware/auth");
// Controller

const WidthdrawController = require('../controller/WidthdrawController');
const PaymentGatewayController = require('../controller/PaymentGatewayController');
const OptionController = require('../controller/OptionController');
const MatchController = require('../controller/admin/MatchController');
const MatchQuestionController = require('../controller/admin/MatchQuestionController');
const ClubController = require('../controller/admin/ClubController');

const GameController = require('../controller/admin/GameController');
const { index, store, allteams } = require("../controller/admin/TeamController");
const DepositeController = require('../controller/DepositController');
// Validator
const depositValidator = require('../validations/depositValidator');
const clubtValidator = require('../validations/admin/clubValidator');

const widthdrawValidator = require('../validations/widthdrawValidator');
const { runValidation } = require("../validations");
const paymentGatewayValidator = require("../validations/admin/paymentGatewayValidator");
const optionValidator = require("../validations/optionValidator");
const matchValidation = require('../validations/admin/bet/match/matchValidation');
const matchQuestionValidation = require('../validations/admin/bet/matchQuestionValidation')
// Model
const User = require('../models/User');

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




// Api

router.get('/users', async(req, res)=>{
    const users = await User.find({isAdmin:false,isClub:false},{'password':false});
    res.send(users);
});
router.get('/user/:id', async (req, res)=>{
    const {id} = await req.params
    const deposit = await User.findOne({_id:id});
    res.json(deposit)
});



// Payment Gateways
router.get('/payment-gateways', PaymentGatewayController.index);
router.post('/payment-gateways', auth,paymentGatewayValidator.paymentGateStore,runValidation, PaymentGatewayController.store);
router.post('/payment-gateway/delete/:id', auth,PaymentGatewayController.destroy);
// Options
router.get('/options', OptionController.options);
router.get('/option/header-notice', OptionController.headerNotice);
router.get('/option/footer-notice', OptionController.footerNotice);
router.get('/option/get/:key', OptionController.get);
router.post('/option/set', auth, optionValidator.optionSet,OptionController.set);


router.get('/games',GameController.index);
router.get('/teams', index);
router.get('/allteams', allteams);
router.post('/team/store', upload.single('flag'), store);


// Match
router.get('/matches', MatchController.index);
router.get('/match/:id', MatchController.show);
router.post('/matches',matchValidation.matchStore,runValidation, MatchController.store);
router.post('/match/update/:id',matchValidation.matchUpdate,runValidation, MatchController.update);
router.post('/match/delete/:id', auth,MatchController.destroy);
// Match Question
router.get('/match/questions', MatchQuestionController.index);
router.post('/match/:id/question',matchQuestionValidation.matchQuestionStore, runValidation, MatchQuestionController.store);
// Club

router.get('/clubs', ClubController.index);
router.post('/clubs',auth,clubtValidator.clubCreate,runValidation, ClubController.store);

// =========== User End ==========================
// Deposit
router.get('/deposites', DepositeController.index);
router.get('/deposit/:id', DepositeController.show);
router.post('/deposit/:id',auth, DepositeController.update);
router.post('/deposite/store', auth,depositValidator.depositStore, runValidation, DepositeController.store);
router.get('/user/:id/deposites', DepositeController.userDeposites);

// Widthdraws
router.get('/widthdraws', WidthdrawController.index);
router.get('/user/:id/widthdraws', WidthdrawController.userWidthdraws); // User
router.get('/widthdraw/:id', WidthdrawController.show);
router.post('/widthdraw/:id', WidthdrawController.update);
router.post('/user/widthdraws/store',auth,widthdrawValidator.widthdrawStore, runValidation, WidthdrawController.store);



module.exports = router;