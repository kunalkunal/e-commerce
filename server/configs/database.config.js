const mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.connect(config.MONGO_DB.URL, config.MONGO_DB.OPTIONS).then(() => {
        console.log(`DB connection established with ${config.DB_NAME}`);
    }).catch(error => {
        console.error(error, 'Could not establish mongoose connection');
    });
}
