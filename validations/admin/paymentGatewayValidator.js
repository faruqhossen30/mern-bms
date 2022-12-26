const { check } = require("express-validator");

exports.paymentGateStore = [
  check('accountNumber')
  .notEmpty()
  .withMessage("Account Number is missing"),     

  check('method')
  .notEmpty()
  .withMessage("Method  is missing"),

  check('type')
  .notEmpty()
  .withMessage("Type  is missing"),     
];