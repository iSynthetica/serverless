const empty = require('is-empty')

// Will validate an object against a JOI schema
exports.validateParams = (object, schema, allowUnknown = true) => {
    if (empty(schema)) {
        return object;
    }

    const { value, error, warning } = schema.validate(object);
    // const result = Joi.validate(object, schema, { allowUnknown: allowUnknown, abortEarly: false });
    if (error) {
        return Promise.reject({ statusCode: 400, body: { messages: {"error":"error"} }, isJoi: true })
    }
    return value; // We return the validated value with any type conversions and other modifiers applied
}