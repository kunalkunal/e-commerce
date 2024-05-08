const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName : String,
    brandName : String,
    category : String,
    productImage : String,
    description : String,
    price : Number,
    sellingPrice : Number
},{ timestamps: { createdAt: 'createdOn', updatedAt: 'updatedOn' } })

module.exports = productSchema