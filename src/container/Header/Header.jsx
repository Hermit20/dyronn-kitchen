import React from 'react';
import {images} from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';
import {Navbar} from '../../components';
import { Outlet } from 'react-router-dom'

const Header = () => (
  
  <div className ="app__header app__wrapper section__padding" id="home">
    <div className = "navbar">
      <Navbar />
    </div>
    
    {/* <div className="app__wrapper_info">
      
      <h1 className="app__header-h1">Bringing the Heart of Nigeria to Your Plate </h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>We cater for Private Events, Weddings, Showers, Special Occasions, and More!</p>
      <a href="/menu"><button type="button" className="custom__button">Explore Menu</button></a>
    </div> */}

    <div className="app__wrapper_img">
      <img src={images.dyronn} alt="header img"></img>
      {/* <p class="logo-text">Chase the New Flavour</p> */}
    </div>
    
  </div>
);

export default Header;
