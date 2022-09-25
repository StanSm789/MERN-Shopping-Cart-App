import { Main } from './pages/Main';
import { Display } from './pages/Display';
import { Storage } from './pages/Storage';
import { Cart } from './pages/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Main />} />
      <Route path="display" element={<Display />} />
      <Route path="storage" element={<Storage />} />
      <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
