import React from 'react';

import './SpecialMenu.css';



import { SubHeading } from '../../components';
const SpecialMenu = () => (

  <div className="menu__header app__wrapper section__padding" id="home">
    
    <div className="menu__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <p className="menu__header-h1">
        <a href="/dyronn-kitchen/Nigerian_Menu.pdf" target="_blank" rel="noopener noreferrer">
          West African Menu
        </a>
      </p>
      <p className="menu__header-h1">
        <a href="/dyronn-kitchen/Classic_Menu.pdf" target="_blank" rel="noopener noreferrer">
          Western Menu
        </a>
      </p>
      <p className="menu__header-h1">
        <a href="/dyronn-kitchen/Corporate_Buffet_Menu.pdf" target="_blank" rel="noopener noreferrer">
          Corporate Buffet Menu
        </a>
      </p>
    </div>

  </div>

);

export default SpecialMenu;
