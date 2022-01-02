const mongoose = require('mongoose')
const crypto = require('crypto')

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hash: String,
  salt: String,
  token: String,
})

module.exports = mongoose.model('Account', accountSchema)
