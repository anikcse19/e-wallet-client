import React from 'react';

import ServiceSection from './components/ServiceSection';
import MyBkash from './components/MyBkash';
import BannerSlider from './components/BannerSlider';
import Navbar from '../../components/shared/Navbar';


const Home = () => {
    return (
      <div>
        <ServiceSection></ServiceSection>
        <MyBkash></MyBkash>
        <BannerSlider></BannerSlider>
      </div>
    );
};

export default Home;