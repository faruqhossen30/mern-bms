const { check } = require("express-validator");

exports.matchQuestionStore = [
  check('title')
  .notEmpty()
  .withMessage("title is missing"),

  check('status')
  .notEmpty()
  .withMessage("status is missing")

];