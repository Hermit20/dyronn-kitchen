import React from 'react';
import { BrowserRouter, Router, Routes, Route, } from 'react-router-dom';
import { SpecialMenu, Home, Order, Footer } from './container';

import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<SpecialMenu />} />
        <Route path="/order" element={<Order />} />
      </Routes>


      <Footer />
    </>

  );
};


export default App;
