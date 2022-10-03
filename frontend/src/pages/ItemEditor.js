import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../features/itemSlice'
import { HeaderComponent } from '../components/HeaderComponent'
import axios from 'axios'
import { Layout } from 'antd';

const { Content, Footer } = Layout;
const ITEMS_URL = '/api/items'

export function ItemEditor() {
    const { items, isError, message } = useSelector(
      (state) => state.items
    )
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: "",
        quantity: 0,
        description: "",
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {

            if (isError) {
              console.log(message)
            }
          
            dispatch(getItems());

            const id = params.id.toString();

            const record = items.map((item) => {
                if(item._id === id) return item;
            });

          if (!record) {
            window.alert(`Record with id ${id} not found`);
            navigate("/");
            return;
          }
      
          setForm(record);
        }
      
        fetchData();
      
        return;
      }, [params.id, isError, message, dispatch, navigate]);

      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }

      async function onSubmit(e) {
        e.preventDefault();
        const editedItem = {
          name: form.name,
          quantity: form.quantity,
          description: form.description,
        };

        await axios.put(ITEMS_URL + '/' + params.id, editedItem)
      
        navigate("/");
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
            <h1>Update Item</h1>
            <br/>
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => updateForm({ name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity: </label>
                <input
                  type="number" 
                  min="0"
                  id="quantity"
                  required
                  value={form.quantity}
                  onChange={(e) => updateForm({ quantity: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="description">Description: </label>
                <input
                  type="text"
                  id="description"
                  required
                  value={form.description}
                  onChange={(e) => updateForm({ description: e.target.value })}
                />
              </div>
              <br/>
              <div>
                <input
                  type="submit"
                  value="Update Item"
                  className="btn btn-primary"
                />
              </div>
            </form>  
            <div>
            <Link to="/">Home</Link>
            </div>
          </div>
        </Content>
        <Footer>
        </Footer>
  </Layout>
    );
  }
