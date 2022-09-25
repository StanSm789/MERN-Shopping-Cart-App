const mongoose = require('mongoose')
const Item = require('../models/itemModel')

const cartSchema = mongoose.Schema(
  {
    cart: {
      type: [String],
      required: [true, 'Please add a cart'],
    },
  },
  {
    timestamps: true,
  })

module.exports = mongoose.model('Cart', cartSchema)
