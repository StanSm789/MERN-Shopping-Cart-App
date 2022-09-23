const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add an item name'],
    },
    quantity: {
        type: Number,
        required: [true, 'Please add an item qunatity']
      },
    description: {
        type: String,
        required: [true, 'Please add an item description'],
    },
  },
  {
    timestamps: true,
  })

module.exports = mongoose.model('Item', itemSchema)
