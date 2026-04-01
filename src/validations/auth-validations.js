const Joi = require("joi");


const registerSchema = Joi.object({
  username: Joi.string().min(5).required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = { registerSchema, loginSchema };