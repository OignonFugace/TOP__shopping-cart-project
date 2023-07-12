import "./App.css";
import { Routes, Route } from "react-router-dom";
import { StorePage, HomePage, ContactPage, CartPage, ProductPage } from "./pages";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
