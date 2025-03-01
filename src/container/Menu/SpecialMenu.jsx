import React from 'react';

import './SpecialMenu.css';
import { Link } from 'react-router-dom';


import { SubHeading } from '../../components';
const SpecialMenu = () => (

  <div className="menu__header app__wrapper section__padding" id="home">
    
    <div className="menu__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <p className="menu__header-h1">
        <Link to="/Nigerian_Menu.pdf" target="_blank" rel="noopener noreferrer">
          West African Menu
        </Link>
      </p>
      <p className="menu__header-h1">
        <Link to="/Classic_Menu.pdf" target="_blank" rel="noopener noreferrer">
          Western Menu
        </Link>
      </p>
      <p className="menu__header-h1">
        <Link to="/Corporate_Buffet_Menu.pdf" target="_blank" rel="noopener noreferrer">
          Corporate Buffet Menu
        </Link>
      </p>
    </div>

  </div>

);

export default SpecialMenu;
