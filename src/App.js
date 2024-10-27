import React from "react";
import Nevbar from "./components/nevbar";
import Home from "./components/home";
import About from "./components/about"
import Store from "./components/store";
import Contact from "./components/contacte";
import Signin from "./components/Signin";
import Login from "./components/Login";
import { Routes, Route} from "react-router-dom";
import ShoppingcartProvider from "./context/shoppingcart";

function App() {
 
  return (
    <ShoppingcartProvider>
      <Nevbar/>
    <Routes>
      <Route path="/contacte" element={<Contact/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/store" element={<Store/>} /> 
      <Route path="/Signin" element={<Signin/>} /> 
      <Route path="/Login" element={<Login/>} /> 
    </Routes>
    </ShoppingcartProvider>
  );
}

export default App;
