// // // import React from 'react'
// // import MembershipNavbar from "../ExistingMemberNavBar/MembershipNavbar"
// // import HeroSection from '../HeroSection/Heropage'
// // import Services from "../Services/Services";
// // import Review from '../Review/Review';
// // import Faq from '../FAQ/Faq';
// // import ContactUs from '../ContactUs/Contact';
// // import CallToAction from '../CallToAction/Calltoaction';
// // import Footer from '../Footer/Footer';

// // const MembershipPage = () => {
// //   return (
// //     <div>
// //       {/* <MembershipNavbar /> */}
// //       <HeroSection/>
// //         <Services/>
// //         <Review/>
// //         <Faq/>
// //         <ContactUs/>
// //         <CallToAction/>
// //         <Footer/>
// //     </div>
// //   )
// // }

// // export default MembershipPage


// // import React from 'react';
// import MembershipNavbar from '../ExistingMemberNavBar/MembershipNavbar';
// import HeroSection from '../HeroSection/Heropage';
// import Services from '../Services/Services';
// import Review from '../Review/Review';
// import Faq from '../FAQ/Faq';
// import ContactUs from '../ContactUs/Contact';
// import CallToAction from '../CallToAction/Calltoaction';
// import Footer from '../Footer/Footer';

// const MembershipPage = () => {
//   return (
//     <div>
//       <MembershipNavbar />
//       <div id="aboutUs">
//         <HeroSection />
//       </div>
//       <div id="services">
//         <Services />
//       </div>
//       <div id="review">
//         <Review />
//       </div>
//       <div id="faq">
//         <Faq />
//       </div>
//       <div id="contact">
//         <ContactUs />
//       </div>
//       <div id="calltoaction">
//         <CallToAction />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MembershipPage;
// import React from 'react';
import MembershipNavbar from '../ExistingMemberNavBar/MembershipNavbar';
import HeroSection from '../HeroSection/Heropage';
import Services from '../Services/Services';
import Review from '../Review/Review';
import Faq from '../FAQ/Faq';
import ContactUs from '../ContactUs/Contact';
import CallToAction from '../CallToAction/Calltoaction';
import Footer from '../Footer/Footer';

const MembershipPage = () => {
  return (
    <div>
      <MembershipNavbar />
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
  );
};

export default MembershipPage;