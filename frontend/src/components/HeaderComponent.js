import React from 'react'
import { Link } from "react-router-dom";
import { Layout, Button } from 'antd';

const { Header } = Layout;

export function HeaderComponent() {
    return (
        <Header>
            <h1 className='text-colors'><Link to="/" className='text-colors'>Shopping Cart App</Link></h1>
            <Button.Group className='button-style'>
                {/* <Button value="top"><Link to="/AllCarts">All Carts</Link></Button> */}
                <Button value="left"><Link to="/Items">All Items</Link></Button>
                <Button value="top"><Link to="/ItemCreator">Create Item</Link></Button>
                <Button value="left"><Link to="/Cart">Cart</Link></Button>
            </Button.Group>
        </Header>
    )
};
