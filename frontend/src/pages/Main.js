import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { addToCart } from '../reducers/cartSlice'
//import { addItemToCart } from '../features/cartSlice'
//import { decrementQuantity } from '../reducers/storageSlice';
import { reset, getItems, decrementItemQuantity } from '../features/itemSlice'
import { Layout, Col, Row, Divider, Card } from 'antd'
import 'antd/dist/antd.css'
import '../index.css'

const { Header, Footer, Content } = Layout;

export function Main() {
  
//   const storage = useSelector((state) => state.storage.storage)
//   const dispatch = useDispatch()

  function addItem(item) {
    var cartItem = {...item, quantity: 1}
    dispatch(addToCart(cartItem))
  }

  function appendCardAndAdjustStorage(item) {
    addItem(item)
    dispatch(decrementItemQuantity(item))
 }

const navigate = useNavigate()
  const dispatch = useDispatch()

  const { items, isError, message } = useSelector(
    (state) => state.items
  )

  // useEffect(() => {
  //   if (isError) {
  //     console.log(message)
  //   }

  //   dispatch(getItems())

  //   return () => {
  //     dispatch(reset())
  //   }
  // }, [navigate, isError, message, dispatch])

  return (
    <Layout className='layout-container'>
      <Header className='header-container'>
        <h1 className='text-colors'>Main page</h1>
      </Header>
      <Content className='content'>
        <div className='site-layout-content'>
          <h2>React/Redux Shopping Cart</h2>
          <Row>
            <Col span={12}>
              <Link to="/Storage">Storage</Link>
            </Col>
            <Col span={12}>
              <Link to="/Cart">Cart</Link>
            </Col>
          </Row>
          <br/>
          <div>
          {items.length > 0 &&
            <h3>
              Items:
            </h3>
          }
            <div>
              {items.map(item => 
              <Card key={item.id} title={item.name} style={{ width: 300 }}>
                <p>Quantity: {item.quantity}</p>
                <p>Description: {item.description}</p>
                <button onClick={() => item.quantity > 0 ? appendCardAndAdjustStorage(item) : null }>Add To Cart</button>
              </Card>
              )}
            </div>
          </div>
          <Divider></Divider>
          <h2>MERN Stack</h2>
          <Row>
            <Col span={12}>
              <Link to="/ItemCreator">Create Item</Link>
            </Col>
            <Col span={12}>
              <Link to="/Items">All Items</Link>
            </Col>
          </Row>
        </div>  
      </Content>
      <Footer className='footer-container'>
      </Footer>
    </Layout>
  )
}