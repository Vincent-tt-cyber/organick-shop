import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Home } from "./pages/HomePage/Home";
import CartPage from "./pages/CartPage/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Suspense, lazy, useEffect } from "react";
import { ProductPage } from "./pages/ProductPage/ProductPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
