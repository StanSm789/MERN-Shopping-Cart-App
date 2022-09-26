import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const ITEMS_URL = '/api/items'

export function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {

    async function getItems() {
      const response = await fetch(ITEMS_URL);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const items = await response.json();
      setItems(items);
    }
  
    getItems();
  
    return;
  }, [items.length]);

  async function deleteItem(id) {
    await fetch(`${ITEMS_URL}/${id}`, {
      method: "DELETE"
    });
  
    const newRecords = items.filter((el) => el._id !== id);
    setItems(newRecords);
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
            <button onClick={() => deleteItem(item._id)}>
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
