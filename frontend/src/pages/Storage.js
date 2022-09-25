import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToStorage, removeFromStorage } from '../reducers/storageSlice'
import { removeFromCart } from '../reducers/cartSlice'
import { Link } from "react-router-dom";
import { useState } from 'react';

export function Storage() {
    const storage = useSelector((state) => state.storage.storage)
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(addToStorage({
            id: makeId(10),
            name: name,
            quantity: quantity
        }))

        setName("")
        setQuantity(0)
      }

      function deleteItem(item) {
        dispatch(removeFromCart(item))
        dispatch(removeFromStorage(item))
      }

      function makeId(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
       }
       return result;
      }
    
    return (
        <div>
            <h1>Storage</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <label>Enter item name:
                    <input 
                    type="text" 
                    required
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />
                </label>
                <br/>
                <label>Enter quantity:
                    <input 
                    type="number" 
                    min="0"
                    value={quantity}
                    onChange={event => setQuantity(event.target.value)}
                    />
                </label>
                <br/>
                <input type="submit" />
            </form>
            </div>
            <div>
                <p>Storage Items:</p>
                <div>
                    { storage.map(item => <li key={item.id}>
                        <button
                        aria-label="Add to storage"
                        onClick={() => deleteItem(item)}
                        >
                            {item.name}
                            </button>
                        </li>) }
                </div>
            </div>
            <br/>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
    )
  };
