const asyncHandler = require('express-async-handler')

const Item = require('../models/itemModel')

// @desc Get items
// @route GET /api/items
// @access Public
const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find()

    res.status(200).json(items)
})

// @desc Set item
// @route POST /api/items
// @access Public
const setItem = asyncHandler(async (req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add a name field')
    }

    if(!req.body.quantity) {
        res.status(400)
        throw new Error('Please add a quantity field')
    }

    if(!req.body.description) {
        res.status(400)
        throw new Error('Please add a description field')
    }

    const item = await Item.create({
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
    })

    res.status(200).json(item)
})

// @desc Update item
// @route PUT /api/items/:id
// @access Pubblic
const updateItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if(!item) {
        res.status(400)
        throw new Error('Item not found')
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedItem)
})

// @desc Delete item
// @route DELETE /api/items/:id
// @access Public
const deleteItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if(!item) {
        res.status(400)
        throw new Error('Item not found')
    }

    await item.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getItems,
    setItem,
    updateItem,
    deleteItem
}
