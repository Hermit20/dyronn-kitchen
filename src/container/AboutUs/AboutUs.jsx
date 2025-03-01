import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.dyronn} alt="dyronn_overlay" />
    </div>


    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Dyronn Kitchen is a Nigerian-owned catering company specializing in West African-inspired cuisine,
          officially established in 2022. Our vision is deeply rooted in the passion for delivering an unforgettable culinary experience that brings people together
          through the universal language of food. We believe that food is more than nourishment—it is a bridge between cultures, a storyteller of traditions,
          and a celebration of heritage. At Dyronn Kitchen, we are dedicated to sharing the rich, bold flavors of West Africa, connecting continents through taste and time.
        </p>
        
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.founder} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Founder’s Note</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Oge’s journey began in social work and education, where she dedicated herself to student development and learning.
          Yet, her deep-rooted passion for cooking continued to call her. She first introduced her culinary talents at local farmers' markets, where her signature meat pies quickly became a sell-out favorite.
          As she refined and reimagined the cherished recipes passed down through generations, her vision for something greater took shape.
          In 2022, Oge took a bold step forward, officially launching Dyronn Kitchen—starting from her home kitchen before expanding into a commercial space.
          Today, Dyronn Kitchen has scaled its operations while remaining committed to a community-oriented approach, blending tradition, innovation, and the warmth of West African hospitality into every dish.
        </p>
        
      </div>
    </div>
  </div >
);

export default AboutUs;
