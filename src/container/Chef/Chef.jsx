import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id ="chef">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.founder} alt="chef_image" className = "founder_img"/>
    </div>
    <div className="app__wrapper_info">
      
      <h1 className="headtext__cormorant">FOUNDER'S NOTE</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensans">Oge’s journey began in social work and education, where she dedicated herself to student development and learning. 
            Yet, her deep-rooted passion for cooking continued to call her. She first introduced her culinary talents at local farmers' markets, where her signature meat pies quickly became a sell-out favourite. 
            As she refined and reimagined the cherished recipes passed down through generations, her vision for something greater took shape. In 2023, Oge took a bold step forward, officially launching Dyronn Kitchen—starting from her home kitchen before expanding into a commercial space. 
            Today, Dyronn Kitchen has scaled its operations while remaining committed to a community-oriented approach, blending tradition, innovation, and the warmth of West African fusion and  hospitality into every dish.</p>
        </div>
        
      </div>

      <div className="app__chef-sign">
        <p>Oge Morah</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;