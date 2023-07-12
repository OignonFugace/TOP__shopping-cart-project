import "./App.css";
import { Routes, Route } from "react-router-dom";
import { StorePage, HomePage, ContactPage, CartPage, ProductPage, NotFoundPage } from "./pages";
import { Header, Footer } from "./components";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/store/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
