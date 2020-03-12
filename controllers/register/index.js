exports.process = async (payload) => {
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