const mongoose = require('mongoose')

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  bpm: {
    type: String,
    required: true,
  },
  layers: {
    type: Object,
    required: true,
  },
  imgUrl: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Track', trackSchema)
