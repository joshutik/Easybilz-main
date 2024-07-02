import { useState} from 'react'
import img1 from "../assets/Services.png";
import img2 from "../assets/Investment-icon.png";
import img3 from "../assets/Savings-icon.png";
import img4 from "../assets/Loans.png";
import img5 from "../assets/Management-icon.png";
import img6 from "../assets/Development-icon.png";
import "./Services.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SavingModal from "../Modal/SavingsModal/SavingModal";
import InvestModal from '../Modal/InvestModal/InvestModal';
import BusinessMgtModal from '../Modal/BusinessMgtModal/BusinessMgtModal';

const Services = () => {
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);
  const [showSavingModal, setShowSavingModal] = useState(false);
  const [showMgtModal, setShowMgtModal] = useState(false);

  const handleInvestmentShow = () => setShowInvestmentModal(true);
  const handleInvestmentClose = () => setShowInvestmentModal(false);

  const handleSavingShow = () => setShowSavingModal(true);
  const handleSavingClose = () => setShowSavingModal(false);

  const handleMgtShow = () => setShowMgtModal(true);
  const handleMgtClose = () => setShowMgtModal(false);
  // showInvestmentModal
  // handleInvestmentClose
  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="container">
        <div className="row gy-3 py-5">
          <div className="col-md-4 col-md-4 col-sm-12">
            <div className="d-flex">
              <h2 className="w-75">Wed help you</h2>
             <div className="border border-bottom-0 border-start-0 border-end-0 border-top-5 w-50 h-0 my-4 border-primary bord"></div>
            </div>
            <div>
              <img src={img1} alt="" className="img-fluid"/>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card invest w-100 px-3 py-4 rounded-5 border-0 border-0">
              <div className=" mb-3 mx-auto">
                <img src={img2} alt="" className="img-fluid" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Investment
              </h5>
              <p className="card-text">
                Our investments is a purposefully motivated one aimed at easing
                an aspect your bills. We are focused on easing the financial
                burdens, building financial goals and billings of members and
                clients. The ROI is designed or tailored to ease a particular
                bil or bills. <span className=' fw-bold text-primary pe-auto moda' onClick={handleInvestmentShow}>See more.......</span>
              </p>
            </div>
            <InvestModal show={showInvestmentModal} handleClose={handleInvestmentClose} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card savings w-100 px-3 py-4 rounded-5 border-0">
              <div className="mb-3 mx-auto">
                <img src={img3} alt="" className="img-fluid"/>
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Savings
              </h5>
              <p className="card-text">
                Savings are a crucial aspect of financial health and stability.
                And we want to be able to help you achieve the highest levels of
                financial security and ease. With Eazybillz, you do not just
                save, you save to earn.
                <span className=' fw-bold text-primary pe-auto moda' onClick={handleSavingShow}>See more.......</span>
              </p>
            </div>
            <SavingModal show={showSavingModal} handleClose={handleSavingClose} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card invest w-100 px-3 py-4 rounded-5 border-0">
              <div className=" mb-3 mx-auto">
                <img src={img4} alt="" className="img-fluid"/>
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Loans
              </h5>
              <p className="card-text">
                We offer loans to suit a variety of needs and circumstances. Our
                goal is to provide financial assistance whether you are looking
                to fund a new business venture, purchase a home, or cover
                unexpected expenses, we are here to help at regulated and
                affordable interests.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card savings w-100 px-3 py-4 rounded-5 border-0">
              <div className=" mb-3 mx-auto">
                <img src={img5} alt="img-fluid" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Business Management
              </h5>
              <p className="card-text">
                A lot of the times, bills could get too stressful and complex to
                handle, now you no longer have to worry about that because we
                can help you handle all those bills without you lifting a
                finger.
                <span className=' fw-bold text-primary pe-auto moda' onClick={handleMgtShow}> See more.......</span>
              </p>
            </div>
            <BusinessMgtModal show={showMgtModal} handleClose={handleMgtClose} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card bg-light w-100 px-3 py-4 rounded-5 border-0">
              <div className="mb-3 mx-auto">
                <img src={img6} alt="" className="img-fluid" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Business Development
              </h5>
              <p className="card-text">
                In many cases people have money but do not know where to put the
                money or invest in. That is why we want to help you set up
                profitable businesses, manage it and make sure it gets the right
                structure before handing it over to you. Eazybillz is the future
                you’ve been dreaming about
                <span className=' fw-bold text-primary modal'>See more.......</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
