import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { addToCart } from '../reducers/cartSlice';
import { decrementQuantity } from '../reducers/storageSlice';

//const ITEMS_URL = 'http://localhost:5000/api/items'

export function Main() {
  
  const storage = useSelector((state) => state.storage.storage)
  const dispatch = useDispatch()

  function addItem(item) {
    var cartItem = {...item, quantity: 1}
    dispatch(addToCart(cartItem))
  }

  function appendCardAndAdjustStorage(item) {
    addItem(item)
    dispatch(decrementQuantity(item))
 }

  return (
    <div>
      <h1>Main page</h1>
      <div>
        <h2>Items:</h2>
        <div>
          {storage.map(item => 
            <p key={item.id}>Name: {item.name}
            <br/>
            Quantity: {item.quantity}
            <br/>
            <button onClick={() => item.quantity > 0 ? appendCardAndAdjustStorage(item) : null }>Add To Cart</button>
            <br/>
            </p>
          )}
        </div>
      </div>
      <br/>
      <div>
        <Link to="/Storage">Storage</Link>
      </div>
      <div>
        <Link to="/Cart">Cart</Link>
      </div>
      <div>
        <Link to="/ItemCreator">Create Item</Link>
      </div>
      <div>
        <Link to="/Items">All Items</Link>
      </div>
    </div>
  )
}