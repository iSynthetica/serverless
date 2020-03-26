require('dotenv').config();
var fs = require('fs');

const APP_NAME = 'MB Funnel BE';

if (process.env.environment.endsWith("-dev")){
    process.env.environment = "staging";
}

var config = `
module.exports = {
    env: '${process.env.environment}',
}
`;

fs.writeFileSync(__dirname + '/../controllers/config.js', config);