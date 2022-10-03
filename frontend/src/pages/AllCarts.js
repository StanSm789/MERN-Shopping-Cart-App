import React from 'react'
import { Link } from "react-router-dom";
import { HeaderComponent } from '../components/HeaderComponent'
import { Layout, List } from 'antd';

const { Footer, Content } = Layout;

export function AllCarts() {

    const data = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
    
    return (
        <Layout className="layout">
            <HeaderComponent>
            </HeaderComponent>
            <Content className='content-style'>
                <div className="site-layout-content">
                    <br/>
                    <br/>
                    <h1>All Carts Saved In Database</h1>
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
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item
                            key={item}
                        >
                            {item}
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
  };
