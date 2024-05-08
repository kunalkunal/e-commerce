
  const mongoose = require('mongoose')
const userShema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
  password: { type: String },
  isAdmin: { type: Boolean, default: false },
},{ timestamps: { createdAt: 'createdOn', updatedAt: 'updatedOn' } })

module.exports = userShema
  