import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        {/* <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p> */}
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Socials</p>
        <p className="p__opensans">Instagram: @dyronnkitchen</p>
        <p className="p__opensans">Phone Number: (780) 887-3657</p>
        <p className="p__opensans">Email: dyronnkitchen@gmail.com</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
