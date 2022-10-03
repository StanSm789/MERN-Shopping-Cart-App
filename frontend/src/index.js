import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux'
import axios from 'axios'
import { reset, getItems, decrementItemQuantity } from './features/itemSlice'

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// store.dispatch((dispatch) => {
//   Promise.all([
//      axios('http://localhost:5000/api/items')]).then((items) => {
//      dispatch(getItems());
//      // return Promise.resolve();
//   }).then(() => {
//       root.render(
//           <Provider store={store}>
//              <App />
//           </Provider>,
//           document.getElementById('root')
//       );
//   })
// });

store.dispatch((dispatch) => {
  Promise.all([dispatch(getItems())]).then(() => {
      root.render(
          <Provider store={store}>
             <App />
          </Provider>,
          document.getElementById('root')
      );
  })
});
