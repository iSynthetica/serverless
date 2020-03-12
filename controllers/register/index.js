const {validateParams} = require("../common");

exports.process = async (payload) => {
    payload = await validateParams(payload, require('./requestSchema'), false);

    let first_name = payload.first_name;
    let last_name = payload.last_name;
    let email = payload.email;
    let password = payload.password;

    let result = {
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password
    };

    return await result;
}