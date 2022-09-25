const asyncHandler = require('express-async-handler')

const Cart = require('../models/cartModel')
const Item = require('../models/itemModel')

// @desc Get carts
// @route GET /api/carts
// @access Public
const getCarts = asyncHandler(async (req, res) => {
    const carts = await Cart.find()

    res.status(200).json(carts)
})

// @desc Set cart
// @route POST /api/carts
// @access Public
const setCart = asyncHandler(async (req, res) => {
    if(!req.body.cart) {
        res.status(400)
        throw new Error('Please add a cart')
    }

    const cart = await Cart.create({
        cart: req.body.cart,
    })

    res.status(200).json(cart)
})

// @desc Update cart
// @route PUT /api/carts/:id
// @access Public
const updateCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.id)

    if(!cart) {
        res.status(400)
        throw new Error('Cart not found')
    }

    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedCart)
})

// @desc Delete cart
// @route DELETE /api/carts/:id
// @access Public
const deleteCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.id)

    if(!cart) {
        res.status(400)
        throw new Error('Cart not found')
    }

    await cart.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getCarts,
    setCart,
    updateCart,
    deleteCart
}
