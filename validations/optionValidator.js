const { check } = require("express-validator");

exports.optionSet = [
  check('key')
  .notEmpty()
  .withMessage("Key is missing for set value"),   

  check('value')
  .notEmpty()
  .withMessage("Value is missing"),   
];