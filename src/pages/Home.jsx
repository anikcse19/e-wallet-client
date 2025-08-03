import React from 'react';
import Navbar from '../components/shared/Navbar';
import ServiceSection from '../components/home/ServiceSection';
import MyBkash from '../components/home/MyBkash';
import BannerSlider from '../components/home/BannerSlider';

const Home = () => {
    return (
      <div>
        <Navbar></Navbar>
        <ServiceSection></ServiceSection>
        <MyBkash></MyBkash>
        <BannerSlider></BannerSlider>
      </div>
    );
};

export default Home;