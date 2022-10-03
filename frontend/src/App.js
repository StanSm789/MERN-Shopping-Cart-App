import { Main } from './pages/Main';
import { Cart } from './pages/Cart';
import { ItemCreator } from './pages/ItemCreator';
import { Items } from './pages/Items';
import { ItemEditor } from './pages/ItemEditor';
import { AllCarts } from './pages/AllCarts';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Main />} />
      <Route path="cart" element={<Cart />} />
      <Route path="itemCreator" element={<ItemCreator />} />
      <Route path="items" element={<Items />} />
      <Route path="/items/:id" element={<ItemEditor />} />
      <Route path="allCarts" element={<AllCarts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
