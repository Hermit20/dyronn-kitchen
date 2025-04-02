import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLinkClick = () => {
    setToggleMenu(false); // Closes the menu when a link is clicked
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <MdOutlineRestaurantMenu fontSize={50} />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <div />
        <li className="p__opensans"><a href="/dyronn-kitchen/#about" onClick={handleLinkClick}>About</a></li>
        <div />
        <li className="p__opensans"><a href="/dyronn-kitchen/#chef" onClick={handleLinkClick}>Founder's Note</a></li>
        <div />
        <li className="p__opensans"><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
        <div />
        <li className="p__opensans"><a href="/dyronn-kitchen/#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
      
      <div className="app__navbar-order">
        <Link to="/order" className="p__opensans">Order</Link>
      </div>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li className="p__opensans"><a href="/dyronn-kitchen/#about" onClick={handleLinkClick}>About</a></li>
              <li className="p__opensans"><a href="/dyronn-kitchen/#chef" onClick={handleLinkClick}>Founder's Note</a></li>
              <li className="p__opensans"><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
              <li className="p__opensans"><a href="/dyronn-kitchen/#contact" onClick={handleLinkClick}>Contact</a></li>
              <li className="p__opensans"><Link to="/order" onClick={handleLinkClick}>Order</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
