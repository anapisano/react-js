import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <>
      
        <BrowserRouter>
        <Navbar />
          <Routes>
            
            <Route exact path="/productos/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/productos/:categoriaId" element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>

  );
}

export default App;
