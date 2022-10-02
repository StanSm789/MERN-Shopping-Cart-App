import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import itemReducer from '../features/itemSlice';

export default configureStore({
  reducer: {
    items: itemReducer,
    cart: cartReducer,
},
})
