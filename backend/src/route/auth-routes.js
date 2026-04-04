const express = require("express");
const router = express.Router();
const controller = require("../controller/auth-controller");
const validate = require("../middlewares/validation-middleware");
const {
  registerSchema,
  loginSchema,
} = require("../validations/auth-validations");

router.post("/register", validate(registerSchema), controller.register);
router.post("/login", validate(loginSchema), controller.login);

module.exports = router;
