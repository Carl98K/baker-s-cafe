import Home from "./pages/home";
import OurProducts from "./pages/ourproducts";
import About from "./pages/about";
import Contact from "./pages/contact";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ShopContextProvider from "./context/shop-context";
import BreadsShop from "./shop/breadsShop";
import PastriesShop from "./shop/pastriesShop";
import DrinksShop from "./shop/drinksShop";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<OurProducts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/breads" element={<BreadsShop />} />
            <Route path="/pastries" element={<PastriesShop />} />
            <Route path="/drinks" element={<DrinksShop />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
