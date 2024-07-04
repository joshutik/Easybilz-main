// import React from 'react'
import NavigationBar from '../NavigationBar/Navbar'
import HeroSection from '../HeroSection/Heropage'
import Services from "../Services/Services";
import Review from '../Review/Review';
import Faq from '../FAQ/Faq';
import ContactUs from '../ContactUs/Contact';
import CallToAction from '../CallToAction/Calltoaction';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <div>
        {/* <NavigationBar/>
        <HeroSection/>
        <Services/>
        <Review/>
        <Faq/>    
        <ContactUs/>
        <CallToAction/>
        <Footer/> */}
        <div>
      <NavigationBar />
      <div id="aboutUs">
        <HeroSection />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="review">
        <Review />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <div id="calltoaction">
        <CallToAction />
      </div>
      <Footer />
      </div>
    </div>
  )
}

export default Main;
