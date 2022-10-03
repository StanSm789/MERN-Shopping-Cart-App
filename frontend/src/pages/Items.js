import React from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getItems, deleteItem } from '../features/itemSlice'
import { HeaderComponent } from '../components/HeaderComponent'
import { Layout, List } from 'antd';

const { Header, Footer, Content } = Layout;
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
    <Layout className="layout">
        <HeaderComponent>
        </HeaderComponent>
        <Content className='content-style'>
            <div className="site-layout-content">
                <br/>
                <br/>
                <h1>All Items</h1>
                <br/>
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
                      <Link to={`${item._id}`}>{item.name}</Link>
                      <p>Quantity: {item.quantity}</p>
                      <p>Description: {item.description}</p>
                      <button onClick={() => deleteChosenItem(item._id)}>
                          Delete Item
                      </button>
                    </List.Item>
                )}
                />
                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </Content>
        <Footer>
        </Footer>
    </Layout>
  )
}
