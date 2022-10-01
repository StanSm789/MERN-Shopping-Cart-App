// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import cartService from './cartService'

// const initialState = {
//   cart: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: '',
// }

// // Create new cart
// export const createCart = createAsyncThunk(
//   'carts/create',
//   async (cartData, thunkAPI) => {
//     try {
//       return await cartService.createCart(cartData)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// // Get carts
// export const getCarts = createAsyncThunk(
//   'carts/getAll',
//   async (_, thunkAPI) => {
//     try {
//       return await cartService.getCarts()
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// // Delete cart
// export const deleteCart = createAsyncThunk(
//   'carts/delete',
//   async (id, thunkAPI) => {
//     try {
//       return await cartService.deleteCart(id)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItemToCart: (state, action) => {
//         if (state.cart.find(x => x._id === action.payload._id)) {
//           state.cart.map(obj => {
//             if (obj._id === action.payload._id) {
//               console.log('quantity of this object was increased by 1: ', action.payload)
//               return {...obj, quantity: obj.quantity += 1};
//             }
//             return obj;
//           });
//         } else {
//           state.cart.push(action.payload)
//           console.log('new object was added: ', action.payload)
//         }
//       },
//     reset: (state) => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createCart.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(createCart.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.cart.push(action.payload)
//       })
//       .addCase(createCart.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//       })
//       .addCase(getCarts.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(getCarts.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.cart = action.payload
//       })
//       .addCase(getCarts.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//       })
//       .addCase(deleteCart.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(deleteCart.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.isSuccess = true
//         state.cart = state.cart.filter(
//           (item) => item._id !== action.payload._id
//         )
//       })
//       .addCase(deleteCart.rejected, (state, action) => {
//         state.isLoading = false
//         state.isError = true
//         state.message = action.payload
//       })
//   },
// })

// export const { reset, addItemToCart } = cartSlice.actions
// export default cartSlice.reducer
