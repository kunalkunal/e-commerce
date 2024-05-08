const CONFIG = require('./dev.config');
require('./database.config')(CONFIG);

module.exports = CONFIG;