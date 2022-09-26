import axios from 'axios'

const ITEMS_URL = '/api/items'

const getItems = async () => {
  
    const response = await axios.get(ITEMS_URL)
  
    return response.data
  }

  const itemService = {
    getItems,
  }
  
  export default itemService
