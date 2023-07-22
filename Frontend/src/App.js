
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';
import Order from './Components/Order';
import Item from './Components/Item';
import OrderState from './Components/Context/OrderState';
import Footer from './Components/Footer';



function App() {
  return (
    <div>
      <OrderState>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/item" element={<Item/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </OrderState>
    </div>
  );
}

export default App;
