import { configureStore } from '@reduxjs/toolkit'
import storageReducer from '../reducers/storageSlice'
import cartReducer from '../reducers/cartSlice'
import itemReducer from '../features/itemSlice';

export default configureStore({
  reducer: {
    storage: storageReducer,
    items: itemReducer,
    cart: cartReducer,
},
})
