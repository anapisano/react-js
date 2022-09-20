import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrousel from './components/Carrousel';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="" element={<Carrousel />} />
              <Route exact path="/productos/:categoria" element={<ItemListContainer />} />
              <Route exact path="/productos/:categoria/:id" element={<ItemDetailContainer />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>

  );
}

export default App;
