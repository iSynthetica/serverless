const Joi = require('@hapi/joi');

// Will validate an object against a JOI schema
exports.validateParams = (object, schema, allowUnknown = true) => {
    if (empty(schema)) {
        return object;
    }
    const result = Joi.validate(object, schema, { allowUnknown: allowUnknown, abortEarly: false });
    if (result.error !== null) {
        let error_messages = [];

        result.error.details.forEach((error) => {
            error_messages.push({ message: error.message });
        });

        return Promise.reject({ statusCode: 400, body: { messages: error_messages }, isJoi: true })
    }
    return result.value; // We return the validated value with any type conversions and other modifiers applied
}