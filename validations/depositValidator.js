const { check } = require("express-validator");

exports.depositStore = [
  check('method')
  .notEmpty()
  .withMessage("method is missing"),   

  check('amount')
  .notEmpty()
  .withMessage("amount is missing"),  

  check('fromAccount')
  .notEmpty()
  .withMessage("fromAccount is missing"),

  check('toAccount')
  .notEmpty()
  .withMessage("toAccount is missing"),   
];