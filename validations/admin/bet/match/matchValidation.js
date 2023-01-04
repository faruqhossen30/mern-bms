const { check } = require("express-validator");

exports.matchStore = [
  check('teamOne')
  .notEmpty()
  .withMessage("Team One is missing"),

  check('teamTwo')
  .notEmpty()
  .withMessage("Team Two is missing"),

  check('date')
  .notEmpty()
  .withMessage("Date is missing"),

  check('time')
  .notEmpty()
  .withMessage("time is missing"),

  check('status')
  .notEmpty()
  .withMessage("status is missing"),

  check('autoQuestion')
  .notEmpty()
  .withMessage("Auto Question is missing"),

];