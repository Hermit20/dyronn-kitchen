import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { SpecialMenu, Home, Order, Footer } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <Router>
     
      <Navbar />
      <Routes>
        <Route path="dyronn-kitchen/" element={<Home />} />
        <Route path="/menu" element={<SpecialMenu />} />
        <Route path="/order" element={<Order />}/>
      </Routes>

      <Footer />
    </Router>
  );
};


export default App;
