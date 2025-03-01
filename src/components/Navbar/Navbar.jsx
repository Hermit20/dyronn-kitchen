import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
        <img src={images.dyronn} alt="app logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><a href="/dyronn-kitchen/#about">About</a></li>
        <li className="p__opensans"><Link to="/menu">Menu</Link></li>
        {/* <li className="p__opensans"><a href="#awards">Awards</a></li> */}
        <li className="p__opensans"><a href="/dyronn-kitchen/#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-order">
        <Link to="/order" className="p__opensans">Order</Link>
        <div />
        <Link to="/" className="p__opensans">Book Table</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen-links">
            <li className="p__opensans"><Link to="/">Home</Link></li>
            <li className="p__opensans"><a href="/dyronn-kitchen/#about">About</a></li>
            <li className="p__opensans"><Link to="/menu">Menu</Link></li>
            <li className="p__opensans"><a href="/dyronn-kitchen/#contact">Contact</a></li>
            <li className="p__opensans"><Link to="/order">Order</Link></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
