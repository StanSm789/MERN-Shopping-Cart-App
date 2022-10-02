import React from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getItems, deleteItem } from '../features/itemSlice'

const ITEMS_URL = '/api/items'

export function Items() {
  const { items, isError, message } = useSelector(
    (state) => state.items
  )

  const dispatch = useDispatch()

  useEffect(() => {

    if (isError) {
      console.log(message)
    }
  
    dispatch(getItems());
  
    return;
  }, [ isError, message, dispatch ]);

  async function deleteChosenItem(id) {
    dispatch(deleteItem(id))
    window.location.reload(false)
  }

  return (
    <div>
      <h1>All Items</h1>
      <div>
        <h2>Items:</h2>
        <div>
          {items.map(item => 
            <div>
            <Link to={`${item._id}`}>{item.name}</Link>
            <p>Quantity: {item.quantity}</p>
            <p>Description: {item.description}</p>
            <button onClick={() => deleteChosenItem(item._id)}>
                Delete Item
            </button>
            <br/>
            <br/>
            <br/>
            </div>
          )}
        </div>
      </div>
      <br/>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}
