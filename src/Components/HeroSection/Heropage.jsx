// // import React from 'react'
// import "./Heropage.css";
// import img1 from "../assets/hero-psge-2.png";
// import img2 from "../assets/hero parthern.png";
// // import img3 from "../assets/TransLogo.png";

// const Heropage = () => {
//   return (
//     <div>
//       <section className="hero-page">
//         <div className="container">
//           <div className="row align-items-center min-vh-100 justify-content-around">
//             <div className="col-lg-6 col-md-6 col-sm-12">
//               <h1 className="display-3 fw-bold">
//                 Save.<span className="invest">Invest.</span>
//                 <span className="grow">Grow.</span>
//               </h1>
//               <p>
//                 Easybillz Cooperative is a community designed for individuals
//                 and businesses to help them grow and manage their bills and
//                 finances easily and effectively.
//               </p>
//               <div>
//                 <button className="btn btn-hero px-5 py-2 text-light rounded-pill">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6 col-sm-12 hero-bg position-relative">
//               <div className="hero-img">
//                 <img src={img1} alt="" className="mt-5 img-fluid" />
//                 <img
//                   src={img2}
//                   alt="logo parthern"
//                   className="img-fluid position-absolute z-1 top-100 start-50 translate-middle-x"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="container-fluid w-100 px-5">
//           <div className="container-fluid ">
//             <div className="card who-card rounded-5 py-5">
//               <div className="row text-light align-items-center justify-content-center">
//                 <div className="col-lg-4 col-md-6 col-sm-12">
//                   <h2 className="display-3 fw-bold text-center">who we are?</h2>
//                   {/* <img src={img3} alt="logo" className="img-fluid" /> */}
//                 </div>
//                 <div className="col-lg-1 col-md-6 col-sm-12">
//                   <div className="vr"></div>
//                 </div>
//                 <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
//                   <p>
//                     Easy-billz Cooperative is a community designed for
//                     individuals and businesses to help them grow and manage
//                     their Bills and finances Easily and effectively. Members are
//                     provided and guided by effective tools for savings, access
//                     to loan, investment and bill/business mgt. tools to enhance
//                     their finances and businesses easily and efficiently.
//                     Investments portfolio are setup for members to invest and
//                     gain ROI. We operate different savings packages, investment
//                     portfolios and access to fund (loan) for members, and also
//                     help them setup, manage and run businesses for them.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Heropage;
// import React from 'react'
import "./Heropage.css";
import img1 from "../assets/hero-psge-2.png";
import img2 from "../assets/hero parthern.png";
// import img3 from "../assets/TransLogo.png";

const Heropage = () => {
  return (
    <div>
      <section className="container-fluid hero-page pb-1">
        <div className="container pt-5">
          <div className="row align-items-center min-vh-100 justify-content-center mt-5 pb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
              <h1 className="display-3 fw-bold">
                Save.<span className="invest-1">Invest.</span>
                <span className="grow">Grow.</span>
              </h1>
              <p>
                Easybillz Cooperative is a community designed for individuals
                and businesses to help them grow and manage their bills and
                finances easily and effectively.
              </p>
              <div>
                <button className="btn btn-hero px-5 py-2 text-light rounded-pill">
                  Get Started
                </button>
              </div>
            </div>
             <div className="col-lg-6 col-md-6 col-sm-12 hero-bg position-relative">
              <div className="hero-img mt-0">
                <img src={img1} alt="lady with phone" className="img-fluid pt-5 mt-lg-5 hero-img-1" />
                <img
                  src={img2}
                  alt="logo parthern"
                  className="img-fluid path-logo position-absolute z-1 top-100 start-50 translate-middle-x"
                />
              </div>
            </div> 
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid w-100 px-5">
  
            <div className="card who-card rounded-5 py-5">
              <div className="row text-light align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                  <h2 className="display-3 fw-bold">Who we are?</h2>
                  {/* <img src={img3} alt="logo" className="img-fluid" /> */}
                </div>
                <div className="col-lg-1 col-md-6 col-sm-12 d-none d-lg-block">
                  <div className="vr"></div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-lg-5 text-center text-md-start">
                  <p className="text-start">
                    Easy-billz Cooperative is a community designed for
                    individuals and businesses to help them grow and manage
                    their Bills and finances Easily and effectively. Members are
                    provided and guided by effective tools for savings, access
                    to loan, investment and bill/business mgt. tools to enhance
                    their finances and businesses easily and efficiently.
                    Investments portfolio are setup for members to invest and
                    gain ROI. We operate different savings packages, investment
                    portfolios and access to fund (loan) for members, and also
                    help them setup, manage and run businesses for them.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Heropage;
