import { createSlice } from '@reduxjs/toolkit'
import itemService  from '../support/itemService'

// const items = itemService.getItems().then(value => {
//   console.log(value);
//   return value;
// })
//console.log(items);

export const storageSlice = createSlice({
  name: 'storage',
  initialState: {
    storage: [],
  },
  reducers: {
    addToStorage: (state, action) => {
      state.storage.push(action.payload)
      console.log(action.payload)
    },
    removeFromStorage: (state, action) => ({
      ...state,
      storage: state.storage.filter(item => item.id !== action.payload.id)
    }),
    incrementQuantity: (state, action) => {
      state.storage.map(obj => {
        if (obj.id === action.payload.id) {
          console.log('quantity of this object in store was increased by 1: ', action.payload)
          return {...obj, quantity: obj.quantity += 1}
        }
        return obj
      })
    },
    decrementQuantity: (state, action) => {
      state.storage.map(obj => {
        if (obj.id === action.payload.id) {
          console.log('quantity of this object was decreased in store by 1: ', action.payload)
          return {...obj, quantity: obj.quantity -= 1}
        }
        return obj
      })
    },
    incrementByCertainNumber: (state, action) => {
      state.storage.map(obj => {
        if (obj.id === action.payload.id) {
          console.log(`quantity of ${obj.name} was increased in store by ${action.payload.quantity}: `)
          return {...obj, quantity: obj.quantity += action.payload.quantity}
        }
        return obj
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToStorage, removeFromStorage, incrementQuantity, 
  decrementQuantity, incrementByCertainNumber } = storageSlice.actions

export default storageSlice.reducer
