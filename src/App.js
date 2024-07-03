import { Routes, Route } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import { CartPage, CheckoutPage, ContactPage, Home, PageNotFound, ProductDetailPage, ProductPage, TestimonialPage } from './pages';
import "./components/css/style.css"
import "./components/css/bootstrap.min.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
      
    </>
  );
}

export default App;
