import axios from 'axios'

const API_URL = '/api/items'

// Create new item
const createItem = async (itemData) => {

  const response = await axios.post(API_URL, itemData)

  return response.data
}

// Get items
const getItems = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

// Delete item
const deleteItem = async (itemId) => {

  const response = await axios.delete(API_URL + itemId)

  return response.data
}

const itemService = {
    createItem,
    getItems,
    deleteItem,
}

export default itemService
