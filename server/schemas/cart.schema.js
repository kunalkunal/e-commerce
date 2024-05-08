const mongoose = require('mongoose')
const cartSchema = mongoose.Schema({
    productId : { type: mongoose.Schema.ObjectId, ref: "products" },
    userId:{ type: mongoose.Schema.ObjectId, ref: "users" },
    qty:{type:Number,default:1},
    price:{type:Number}
},{ timestamps: { createdAt: 'createdOn', updatedAt: 'updatedOn' } })

module.exports = cartSchema