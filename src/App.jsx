import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import PageNotFound from "./Pages/PageNotFound";
import Success from "./Pages/Success";
import Navbar from "./Components/Navbar";

function App() {

  return (
    <Routes>
      <Route index element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<Products />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/navbar" element={<Navbar />} />

      <Route path="/*" element={<PageNotFound />} />

    </Routes>
  );
}

export default App
