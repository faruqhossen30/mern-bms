const { check } = require("express-validator");

exports.widthdrawStore = [
  check('accountNumber')
  .notEmpty()
  .withMessage("accountNumber is missing"),

  check('amount')
  .notEmpty()
  .withMessage("amount is missing"),

  check('method')
  .notEmpty()
  .withMessage("method is missing"),

  check('type')
  .notEmpty()
  .withMessage("type is missing"),
];