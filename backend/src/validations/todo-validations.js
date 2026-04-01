const Joi = require("joi");

exports.todoSchema = Joi.object({
  title: Joi.string().required(),
});