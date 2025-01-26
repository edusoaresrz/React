// css
import "./App.css";

// recursos
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

// components
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <h1>Context API</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
