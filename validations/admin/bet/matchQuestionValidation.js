const { check } = require("express-validator");

exports.matchQuestionStore = [
  check('name')
  .notEmpty()
  .withMessage("name is missing"),

  check('status')
  .notEmpty()
  .withMessage("status is missing")

];