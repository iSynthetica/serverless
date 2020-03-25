require('dotenv').load();
var fs = require('fs');

const APP_NAME = 'MB Funnel BE';

var config = `
    
`;

fs.writeFileSync(__dirname + '/../controllers/config.js', config);