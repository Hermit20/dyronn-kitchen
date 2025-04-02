import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './FindUs.css';
const FindUs = () => (
  <div className="app__bg  section__padding find__us" id="contact">
    <div className="FindUS_info">
      
      
      <div className="app__wrapper-content">
        {/* <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p> */}
        {/* <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Socials</p> */}
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>CONTACT US</h1>
        <div className="app__wrapper-text">
          
          <p className="p__opensans">PHONE NUMBER/WHATSAPP: (780) 887-3657</p>
          <p className="p__opensans">EMAIL: dyronnkitchen@gmail.com</p>
          <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          </div>
        </div>
        
      </div>

      
    </div>

    <div className="app__wrapper_img">
      {/* <img src={images.findus} alt="finus_img" /> */}
    </div>
  </div>
);

export default FindUs;
