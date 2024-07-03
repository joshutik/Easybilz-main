// export default MemberAccount;
import { useState } from 'react';
import './MemberAccount.css';
import img1 from "../assets/Note.png";
import { Link } from "react-router-dom";
import MemberAccountNav from '../MemberAccountNav/AccountNav';
import Table from '../Table/ResponsiveTable'
import FundModal from '../FundModal/FundModal'; // Import the FundModal component
import Footer from '../Footer/Footer';

const MemberAccount = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container-fluid">
      <MemberAccountNav/>
      <div className="container">
        <div className="row align-items-center justify-content-around min-vh-100">
          <div className="col-lg-6 col-md-6 col-sm-12">
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
              <Table/>
            </div>
          </div>
          <div className="col-lg-1 col-md-6 col-sm-12 d-lg-block d-sm-none text-center">
            <div className="vr vh-100" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 -auto">
            <div className="card border-0 text-light py-4 px-3">
              <div className="p-3">
                <div className="text-center">
                  <img src={img1} alt="Note png" className="img-fluid" />
                </div>
                <p className="text-dark">
                  We&apos;re excited to have you! Just one more step to get started.
                  <Link to={"/registration-form"}> Complete your profile</Link> to personalize your experience.
                </p>
                <div className='mt-4'>
                 <Link to={"/registration-form"} className='btn bg-light px-5 fw-bold border-primary rounded-pill complete'>Complete Profile</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FundModal show={showModal} handleClose={handleCloseModal} />
      <div className='mt-5'>
        <Footer/>
      </div>
      
    </div>
  );
};

export default MemberAccount;
