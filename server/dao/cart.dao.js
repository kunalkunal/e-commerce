
const cartSchema = require('../schemas/cart.schema.js')
const mongoose=require('mongoose')
function getCollection() {
    const connection = mongoose.connection.useDb(CONFIG.DB_NAME)
    return connection.model('cart', cartSchema)
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