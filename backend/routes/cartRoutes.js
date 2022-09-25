const express = require('express')
const router = express.Router()
const { 
    getCarts, 
    setCart, 
    updateCart, 
    deleteCart 
} = require('../controllers/cartController')

router.route('/').get(getCarts).post(setCart)
router.route('/:id').put(updateCart).delete(deleteCart)

module.exports = router
