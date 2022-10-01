import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increment, decrement } from '../reducers/cartSlice'
import { incrementQuantity, decrementQuantity, incrementByCertainNumber } from '../reducers/storageSlice'
import { incrementItemQuantity, decrementItemQuantity, incrementItemQuantityByCertainNumber } from '../features/itemSlice'
import { Link } from "react-router-dom";
import { Layout, Card } from 'antd';

const { Header, Footer, Content } = Layout;

export function Cart() {
    // const cart = useSelector((state) => state.cart.cart)
    const { cart } = useSelector(
        (state) => state.cart
      )
    const { items } = useSelector(
        (state) => state.items
      )
    //const storage = useSelector((state) => state.storage.storage)
    const dispatch = useDispatch()

    function incrementItemCount(items, item) {
        var storageItem = items.find(element => element.id === item.id)

        if (storageItem.quantity !== 0) {
            dispatch(increment(item))
            dispatch(decrementItemQuantity(item))
        }
    }

    function decrementItemCount(item) {

        if (item.quantity > 1) {
            dispatch(decrement(item))
            dispatch(incrementItemQuantity(item))
        } else {
            dispatch(removeFromCart(item))
            dispatch(incrementItemQuantity(item))
        }
    }

    function removeItemFromCart(item) {
        dispatch(incrementItemQuantityByCertainNumber(item))
        dispatch(removeFromCart(item))
    }
    
    return (
        <Layout className='layout-container'>
            <Header className='header-container'>
                <h1 className='text-colors'>Cart</h1>
            </Header>
            <Content className='content'>
                <div className='site-layout-content'>
                    <p>Cart Items:</p>
                    <div>
                        {cart.map(item => 
                        <Card key={item.id} title={item.name} style={{ width: 300 }}>
                            <button
                            aria-label="Increment value"
                            onClick={() => incrementItemCount(items, item)}
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
                        </Card>
                        )}
                    </div>
                    <br/>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                </div>
      </Content>
      <Footer>
      </Footer>
    </Layout>
    )
  };
