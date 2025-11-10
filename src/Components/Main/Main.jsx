// import React from 'react'
import NavigationBar from '../NavigationBar/Navbar'
import HeroSection from '../HeroSection/Heropage'
import Services from "../Services/Services";
import Ebanking from '../Ebanking/Ebanking'
import Review from '../Review/Review';
import Faq from '../FAQ/Faq';
import ContactUs from '../ContactUs/Contact';
import CallToAction from '../CallToAction/Calltoaction';
import Management from '../Management/Management';
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
      <div id="ebanking">
        <Ebanking />
      </div>
      <div id="review">
        <Review />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="management">
        <Management />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <div id="calltoaction">
        <CallToAction />
      </div>
      <Footer />
      </div>

      {/* <Forms/> */}
    </div>
  )
}

export default Main;
