import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux'
import { createItem } from '../features/itemSlice'
import { HeaderComponent } from '../components/HeaderComponent'
import { Layout } from 'antd';

const { Content, Footer } = Layout;
const ITEMS_URL = '/api/items'

export function ItemCreator() {
    const [form, setForm] = useState({
        name: "",
        quantity: 0,
        description: "",
    });

    const dispatch = useDispatch()

    const navigate = useNavigate();

    function updateForm(value) {
    return setForm((prev) => {
        return { ...prev, ...value };
    });
    }

    async function onSubmit(e) {
        e.preventDefault();
      
        const newItem = { ...form };

        dispatch(createItem(newItem))
      
        setForm({ name: "", quantity: 0, description: "" });
        navigate("/");
      }

  return (
    <Layout className="layout">
        <HeaderComponent>
        </HeaderComponent>
        <Content className='content-style'>
        <div className="site-layout-content">
                <br/>
                <br/>
                <h1>Create New Item</h1>
                <br/>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        required
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                        />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="quantity">Quantity</label>
                        <input
                        type="number" 
                        min="0"
                        id="quantity"
                        value={form.quantity}
                        onChange={(e) => updateForm({ quantity: e.target.value })}
                        />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                        type="text"
                        required
                        id="description"
                        value={form.description}
                        onChange={(e) => updateForm({ description: e.target.value })}
                        />
                    </div>
                    <br/>
                    <input type="submit" 
                    value="Create item"/>
                </form>
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
