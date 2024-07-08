// import { useState, useEffect } from 'react';
// import './MemberAccount.css';
// import img1 from "../assets/Note.png";
// import { Link } from "react-router-dom";
// import MemberAccountNav from '../MemberAccountNav/AccountNav';
// import Table from '../Table/ResponsiveTable'
// import FundModal from '../FundModal/FundModal'; // Import the FundModal component
// import Footer from '../Footer/Footer';

// const MemberAccount = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [isProfileCompleted, setIsProfileCompleted] = useState(false);

//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   useEffect(() => {
//     // Check local storage for profile completion status on mount
//     const profileCompleted = localStorage.getItem('profileCompleted');
//     if (profileCompleted) {
//       setIsProfileCompleted(true);
//     }
//   }, []);

//   const handleProfileComplete = () => {
//     // Set profile completion status in local storage
//     localStorage.setItem('profileCompleted', 'true');
//     setIsProfileCompleted(true);
//   };

//   return (
//     <div className="container-fluid">
//       <MemberAccountNav />
//       <div className="container mt-5 pt-5">
//         <div className={`row align-items-center justify-content-around min-vh-100 ${isProfileCompleted ? 'row-cols-1' : ''}`}>
//           <div className={`col-lg-6 col-md-6 col-sm-12 ${isProfileCompleted ? 'col-lg-12' : ''}`}>
//             <div className="row gy-3">
//               <div className="col-lg-6 col-md-12 col-sm-12">
//                 <div className="card payment-card-2 text-light py-4 px-3 w-100">
//                   <div className="container p-3">
//                     <h4 className="fee">Total Savings</h4>
//                     <p className=" mt-3 fs-3">
//                       <span className="fw-bold">₦10,000,000</span>
//                     </p>
//                   </div>
//                   <div className="btn-fund mt-3">
//                     <button
//                       className="btn ms-3 add-fund border-0 bg-transparent text-light rounded-pill"
//                       onClick={handleShowModal}
//                     >
//                       Add funds
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-12 col-sm-12">
//                 <div className="card payment-card-2 text-light py-4 px-3">
//                   <div className="container p-3">
//                     <h4 className="fee">Total Savings</h4>
//                     <p className=" mt-3 fs-3">
//                       <span className="fw-bold">₦10,000,000</span>
//                     </p>
//                   </div>
//                   <div className="btn-fund mt-3">
//                     <button
//                       className="btn ms-3 add-fund border-0 bg-transparent text-light rounded-pill"
//                       onClick={handleShowModal}
//                     >
//                       Add funds
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <Table />
//             </div>
//           </div>
//           {!isProfileCompleted && (
//             <>
//               <div className="col-lg-1 col-md-6 col-sm-12 d-md-none d-lg-block text-center">
//                 <div className="vr vh-100" />
//               </div>
//               <div className="col-lg-4 col-md-6 col-sm-12">
//                 <div className="card border-0 text-light py-4 px-3">
//                   <div className="p-3">
//                     <div className="text-center">
//                       <img src={img1} alt="Note png" className="img-fluid" />
//                     </div>
//                     <p className="text-dark">
//                       We&apos;re excited to have you! Just one more step to get started.
//                       <Link to={"/member-registration-form"}> Complete your profile</Link> to personalize your experience.
//                     </p>
//                     <div className='mt-4'>
//                       <Link 
//                         to={"/member-registration-form"} 
//                         className='btn bg-light px-5 fw-bold border-primary rounded-pill complete'
//                         onClick={handleProfileComplete}
//                       >
//                         Complete Profile
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       <FundModal show={showModal} handleClose={handleCloseModal} />
//       <div className='mt-5'>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default MemberAccount;
import { useState, useEffect } from 'react';
import './MemberAccount.css';
import img1 from "../assets/Note.png";
import { Link } from "react-router-dom";
import MemberAccountNav from '../MemberAccountNav/AccountNav';
import Table from '../Table/ResponsiveTable';
import FundModal from '../FundModal/FundModal';
import Footer from '../Footer/Footer';

const MemberAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const [isProfileCompleted, setIsProfileCompleted] = useState(false);

  // Function to show the fund modal
  const handleShowModal = () => setShowModal(true);

  // Function to close the fund modal
  const handleCloseModal = () => setShowModal(false);

  // Function to check profile completion status from localStorage
  const checkProfileCompletion = () => {
    const profileCompleted = localStorage.getItem('profileCompleted');
    if (profileCompleted) {
      setIsProfileCompleted(true);
    }
  };

  // Use effect to check profile completion status on component mount
  useEffect(() => {
    checkProfileCompletion();
  }, []);

  // const handleClearLocalStorage = () => {
  //   localStorage.clear();
  //   setIsProfileCompleted(false);
  //   console.log('Local storage cleared.');
  // };

  // Function to handle profile completion
  const handleProfileComplete = () => {
    localStorage.setItem('profileCompleted', 'true');
    setIsProfileCompleted(true);
  };

  return (
    <div className="container-fluid">
      <MemberAccountNav />
      <div className="container mt-5 pt-5">
        <div className={`row align-items-center justify-content-around min-vh-100 ${isProfileCompleted ? 'row-cols-1' : ''}`}>
          <div className={`col-lg-6 col-md-6 col-sm-12 ${isProfileCompleted ? 'col-lg-12' : ''}`}>
            <div className="row gy-3">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card payment-card-2 text-light py-4 px-3 w-100">
                  <div className="container p-3">
                    <h4 className="fee">Total Savings</h4>
                    <p className=" mt-3 fs-3">
                      <span className="fw-bold">₦10,000,000</span>
                    </p>
                  </div>
                  <div className="btn-fund mt-3">
                    <button
                      className="btn ms-3 add-fund border-0 bg-transparent text-light rounded-pill"
                      onClick={handleShowModal}
                    >
                      Add funds
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card payment-card-2 text-light py-4 px-3">
                  <div className="container p-3">
                    <h4 className="fee">Total Savings</h4>
                    <p className=" mt-3 fs-3">
                      <span className="fw-bold">₦10,000,000</span>
                    </p>
                  </div>
                  <div className="btn-fund mt-3">
                    <button
                      className="btn ms-3 add-fund border-0 bg-transparent text-light rounded-pill"
                      onClick={handleShowModal}
                    >
                      Add funds
                    </button>
                  </div>
                </div>
              </div>
              <Table />
            </div>
          </div>
          {!isProfileCompleted && (
            <>
              <div className="col-lg-1 col-md-6 col-sm-12 d-md-none d-lg-block text-center">
                <div className="vr vh-100" />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card border-0 text-light py-4 px-3">
                  <div className="p-3">
                    <div className="text-center">
                      <img src={img1} alt="Note png" className="img-fluid" />
                    </div>
                    <p className="text-dark">
                      We&apos;re excited to have you! Just one more step to get started.
                      <Link to={"/member-registration-form"}> Complete your profile</Link> to personalize your experience.
                    </p>
                    <div className='mt-4'>
                      <Link 
                        to={"/member-registration-form"} 
                        className='btn bg-light px-5 fw-bold border-primary rounded-pill complete'
                        onClick={handleProfileComplete}
                      >
                        Complete Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
         {/* Button to clear local storage for testing purposes */}
      </div>
      <FundModal show={showModal} handleClose={handleCloseModal} />
      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  );
};

export default MemberAccount;
