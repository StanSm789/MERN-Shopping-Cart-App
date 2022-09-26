import { Main } from './pages/Main';
import { Storage } from './pages/Storage';
import { Cart } from './pages/Cart';
import { ItemCreator } from './pages/ItemCreator';
import { Items } from './pages/Items';
import { ItemEditor } from './pages/ItemEditor';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Main />} />
      <Route path="storage" element={<Storage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="itemCreator" element={<ItemCreator />} />
      <Route path="items" element={<Items />} />
      <Route path="/items/:id" element={<ItemEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
