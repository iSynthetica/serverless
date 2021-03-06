const Joi = require("@hapi/joi");

// Strict Request Schema Validation
module.exports = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});