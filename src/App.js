import "./App.css";
import { Routes, Route } from "react-router-dom";
import { StorePage, HomePage } from "./pages";
import { Header } from "./components";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </div>
  );
}

export default App;
