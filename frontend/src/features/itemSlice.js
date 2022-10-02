import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import itemService from './itemService'

const initialState = {
  items: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new item
export const createItem = createAsyncThunk(
  'items/create',
  async (itemData, thunkAPI) => {
    try {
      return await itemService.createItem(itemData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get items
export const getItems = createAsyncThunk(
  'items/getAll',
  async (_, thunkAPI) => {
    try {
      return await itemService.getItems()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete item
export const deleteItem = createAsyncThunk(
  'items/delete',
  async (id, thunkAPI) => {
    try {
      return await itemService.deleteItem(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    incrementItemQuantity: (state, action) => {
      state.items.map(obj => {
        if (obj._id === action.payload._id) {
          return {...obj, quantity: obj.quantity += 1}
        }
        return obj
      })
    },
    decrementItemQuantity: (state, action) => {
      state.items.map(obj => {
        if (obj._id === action.payload._id) {
          return {...obj, quantity: obj.quantity -= 1}
        }
        return obj
      })
    },
    incrementItemQuantityByCertainNumber: (state, action) => {
      state.items.map(obj => {
        if (obj._id === action.payload._id) {
          return {...obj, quantity: obj.quantity += action.payload.quantity}
        }
        return obj
      })
    },
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createItem.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.items.push(action.payload)
      })
      .addCase(createItem.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.items = action.payload
      })
      .addCase(getItems.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteItem.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        )
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset, incrementItemQuantity, decrementItemQuantity, incrementItemQuantityByCertainNumber } = itemSlice.actions
export default itemSlice.reducer
