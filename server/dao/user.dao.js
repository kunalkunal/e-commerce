const userShema = require('../schemas/user.schema.js')
const mongoose=require('mongoose')

function getCollection(database) {
    const connection = mongoose.connection.useDb(database)
    return connection.model('user', userShema)
}
const create = async (data) => {
    return await getCollection(CONFIG.DB_NAME)(data).save();
}
const deleteOne = async (condition) => {
    return await getCollection(CONFIG.DB_NAME).deleteOne(condition)
};
const find = async (condition) => {
    return await getCollection(CONFIG.DB_NAME).find(condition)
};
const findOne = async (condition) => {
    return await getCollection(CONFIG.DB_NAME).findOne(condition)
};


module.exports = {
    create, deleteOne, find,findOne
}    