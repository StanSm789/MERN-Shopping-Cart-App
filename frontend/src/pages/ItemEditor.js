import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const ITEMS_URL = '/api/items'

export function ItemEditor() {
    const [form, setForm] = useState({
        name: "",
        quantity: 0,
        description: "",
    });

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(ITEMS_URL);

            const id = params.id.toString();
  
            if (!response.ok) {
              const message = `An error occurred: ${response.statusText}`;
              window.alert(message);
              return;
            }
        
            const items = await response.json();

            const record = items.map((item) => {
                if(item._id === id) return item;
            });

            console.log('ITEM:', record);

          if (!record) {
            window.alert(`Record with id ${id} not found`);
            navigate("/");
            return;
          }
      
          setForm(record);
        }
      
        fetchData();
      
        return;
      }, [params.id, navigate]);

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
      
        await fetch(`${ITEMS_URL}/${params.id}`, {
          method: "PUT",
          body: JSON.stringify(editedItem),
          headers: {
            'Content-Type': 'application/json'
          },
        });
      
        navigate("/");
      }

    return (
      <div>
        <h1>Update Item</h1>
        <form onSubmit={onSubmit}>
       <div>
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           id="name"
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
           value={form.quantity}
           onChange={(e) => updateForm({ quantity: e.target.value })}
         />
       </div>
       <div>
         <label htmlFor="description">Description: </label>
         <input
           type="text"
           id="description"
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
      </div>
    );
  }
