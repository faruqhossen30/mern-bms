const { check } = require("express-validator");

exports.clubCreate = [
  check("name").notEmpty().withMessage("Name is required"),
];
