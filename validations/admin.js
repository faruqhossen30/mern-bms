const { check } = require("express-validator");

exports.adminCreateValidator = [
  check('name')
  .notEmpty()
  .withMessage("name is missing"),
  check('username')
  .notEmpty()
  .withMessage("username is missing"),
  check("email")
    .notEmpty()
    .withMessage("email is missing")
    .isEmail()
    .withMessage("invalid email")
    .isLength({ min: 5 })
    .withMessage("name must have at least 5 characters")
    .isLength({ max: 31 })
    .withMessage("name can have maximum 31characters"),


    
];

exports.adminLoginValidator = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is require")
    .isEmail()
    .withMessage("Invalid Email "),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 5 })
    .withMessage("password must have at least 5 characters"),
];