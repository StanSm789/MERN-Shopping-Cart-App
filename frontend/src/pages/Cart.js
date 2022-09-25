import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increment, decrement } from '../reducers/cartSlice'
import { incrementQuantity, decrementQuantity, incrementByCertainNumber } from '../reducers/storageSlice'
import { Link } from "react-router-dom";

export function Cart() {
    const cart = useSelector((state) => state.cart.cart)
    const storage = useSelector((state) => state.storage.storage)
    const dispatch = useDispatch()

    function incrementItemCount(storage, item) {
        var storageItem = storage.find(element => element.id === item.id)

        if (storageItem.quantity !== 0) {
            dispatch(increment(item))
            dispatch(decrementQuantity(item))
        }
    }

    function decrementItemCount(item) {

        if (item.quantity > 1) {
            dispatch(decrement(item))
            dispatch(incrementQuantity(item))
        } else {
            dispatch(removeFromCart(item))
            dispatch(incrementQuantity(item))
        }
    }

    function removeItemFromCart(item) {
        dispatch(incrementByCertainNumber(item))
        dispatch(removeFromCart(item))
    }
    
    return (
        <div>
            <h1>Cart</h1>
            <div>
                <p>Cart Items:</p>
                <div>
                    {cart.map(item => 
                    <p key={item.id}>Name: {item.name}
                        <br/>
                        <button
                        aria-label="Increment value"
                        onClick={() => incrementItemCount(storage, item)}
                        >
                            Increment
                        </button>
                        <span>{item.quantity}</span>
                        <button
                        aria-label="Decrement value"
                        onClick={() => decrementItemCount(item)}
                        >
                            Decrement
                        </button>
                        <br/>
                        <button onClick={() => removeItemFromCart(item)}>Remove From Cart</button>
                        <br/>
                    </p>
          )}
                </div>
            </div>
            <br/>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
    )
  };
