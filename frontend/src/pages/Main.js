import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'
import { decrementItemQuantity } from '../features/itemSlice'
import { HeaderComponent } from '../components/HeaderComponent'
import { Layout, List, } from 'antd'
import 'antd/dist/antd.css'
import '../index.css'

const { Footer, Content } = Layout;

export function Main() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { items, isError, message } = useSelector(
    (state) => state.items
  )

  function addItem(item) {
    var cartItem = {...item, quantity: 1}
    dispatch(addToCart(cartItem))
  }

  function appendCardAndAdjustStorage(item) {
    addItem(item)
    dispatch(decrementItemQuantity(item))
 }

  return (
    <Layout className="layout">
      <HeaderComponent name="Sara">
      </HeaderComponent>
        <Content className='content-style'>
          <div className="site-layout-content">
            <br/>
            <br/>
            <h1>Main Page</h1>
            <br/>
            <div className='site-layout-content'>
          <br/>
          <div>
            <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 3,
            }}
            dataSource={items}
            renderItem={(item) => (
                <List.Item>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Description: {item.description}</p>
                  <button onClick={() => item.quantity > 0 ? appendCardAndAdjustStorage(item) : null }>Add To Cart</button>
                </List.Item>
            )}
            />
          </div>
        </div>  
          </div>
        </Content>
        <Footer>
        </Footer>
  </Layout>
  )
}
