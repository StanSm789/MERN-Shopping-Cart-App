import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.find(x => x.id === action.payload.id)) {
        state.cart.map(obj => {
          if (obj.id === action.payload.id) {
            console.log('quantity of this object was increased by 1: ', action.payload)
            return {...obj, quantity: obj.quantity += 1};
          }
          return obj;
        });
      } else {
        state.cart.push(action.payload)
        console.log('new object was added: ', action.payload)
      }
    },
    removeFromCart: (state, action) => ({
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload.id)
    }),
    increment: (state, action) => {
      state.cart.map(obj => {
        if (obj.id === action.payload.id) {
          console.log('quantity of this object was increased by 1: ', action.payload)
          return {...obj, quantity: obj.quantity += 1}
        }
        return obj
      })
    },
    decrement: (state, action) => {
      state.cart.map(obj => {
        if (obj.id === action.payload.id) {
          console.log('quantity of this object was decreased by 1: ', action.payload)
          return {...obj, quantity: obj.quantity -= 1}
        }
        return obj
      })
    },
  },
})

export const { addToCart, removeFromCart, increment, decrement } = cartSlice.actions

export default cartSlice.reducer
