import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterSlice'
import storageReducer from '../reducers/storageSlice'
import cartReducer from '../reducers/cartSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    storage: storageReducer,
    cart: cartReducer,
},
})
