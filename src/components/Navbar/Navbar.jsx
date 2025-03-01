import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';


import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
        <img src={images.dyronn} alt="app logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/dyronn-kitchen/">Home</a></li>
        <li className="p__opensans"><a href="/dyronn-kitchen/#about">About</a></li>
        <li className="p__opensans"><a href="/dyronn-kitchen/menu">Menu</a></li>
        {/* <li className="p__opensans"><a href="#awards">Awards</a></li> */}
        <li className="p__opensans"><a href="/dyronn-kitchen/#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-order">
        <a href="/dyronn-kitchen/order" className="p__opensans">Order</a>
        <div />
        <a href="/dyronn-kitchen/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen-links">
            <li className="p__opensans"><a href="/dyronn-kitchen/">Home</a></li>
            <li className="p__opensans"><a href="/dyronn-kitchen/#about">About</a></li>
            <li className="p__opensans"><a href="/dyronn-kitchen/menu">Menu</a></li>
            <li className="p__opensans"><a href="/dyronn-kitchen/#contact">Contact</a></li>
            <li className="p__opensans"><a href="/dyronn-kitchen/order">Order</a></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
