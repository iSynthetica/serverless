require('dotenv').config();
var fs = require('fs');

const APP_NAME = 'MB Funnel BE';

if (process.env.environment.endsWith("-dev")){
    process.env.environment = "staging";
}

var config = `
module.exports = {
    env: '${process.env.environment}',
    functions: [
      'get_plans',
      'register',
      'auth',
      'pay',
      'select_plan',
      'upgrade',
      'donate',
      'update_email'
    ]
}
`;

fs.writeFileSync(__dirname + '/../controllers/config.js', config);