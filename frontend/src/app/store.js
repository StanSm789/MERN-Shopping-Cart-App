import { configureStore } from '@reduxjs/toolkit'
import storageReducer from '../reducers/storageSlice'
import cartReducer from '../reducers/cartSlice'

export default configureStore({
  reducer: {
    storage: storageReducer,
    cart: cartReducer,
},
})
