import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increment, decrement } from '../features/cartSlice'
import { incrementItemQuantity, decrementItemQuantity, incrementItemQuantityByCertainNumber } from '../features/itemSlice'
import { HeaderComponent } from '../components/HeaderComponent'
import { Link } from "react-router-dom";
import { Layout, Card } from 'antd';

const { Header, Footer, Content } = Layout;

export function Cart() {
    const { cart } = useSelector(
        (state) => state.cart
      )
    const { items } = useSelector(
        (state) => state.items
      )
    const dispatch = useDispatch()

    function incrementItemCount(items, item) {
        var storageItem = items.find(element => element._id === item._id)

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
        <Layout className="layout">
            <HeaderComponent>
            </HeaderComponent>
            <Content className='content-style'>
                <div className="site-layout-content">
                    <br/>
                    <br/>
                    <h1>Cart</h1>
                    <br/>
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
