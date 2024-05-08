import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/home.component';
// import About from './About';
import Header from './components/header.component';
import Signin from './components/Signin.component';
import Signup from './components/signup.component';
import Cart from './components/cart.component';
import Product from './components/product.component'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>

      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/signin" element={<Signin />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/product" element={<Product />} /> 


      </Routes>
    </BrowserRouter>
    </>
  );
}
