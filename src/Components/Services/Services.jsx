import { useState } from "react";
import img1 from "../assets/fluent_savings-24-filled.png";
import img2 from "../assets/stash_target.png";
import img3 from "../assets/Vector (2).png";
import img4 from "../assets/icon-park-solid_stock-market.png";
import img5 from "../assets/fluent_savings-24-filled (1).png";
import img6 from "../assets/fluent_people-community-32-filled.png";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SavingModal from "../Modal/SavingsModal/SavingModal";
// import InvestModal from "../Modal/InvestModal/InvestModal";
// import BusinessMgtModal from '../Modal/BusinessMgtModal/BusinessMgtModal';

const Services = () => {
  // const [showInvestmentModal, setShowInvestmentModal] = useState(false);
  const [showSavingModal, setShowSavingModal] = useState(false);
  // const [showMgtModal, setShowMgtModal] = useState(false);

  // const handleInvestmentShow = () => setShowInvestmentModal(true);
  // const handleInvestmentClose = () => setShowInvestmentModal(false);

  const handleSavingShow = () => setShowSavingModal(true);
  const handleSavingClose = () => setShowSavingModal(false);

  // const handleMgtShow = () => setShowMgtModal(true);
  // const handleMgtClose = () => setShowMgtModal(false);
  // showInvestmentModal
  // handleInvestmentClose
  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="container">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="d-flex">
            <h2 className="w-75">We&apos;d help you</h2>
            <div className="border border-bottom-0 border-start-0 border-end-0 border-top-5 w-50 h-0 my-4 border-primary bord"></div>
          </div>
        </div>
        <div className="row gy-3 py-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card invest w-100 px-3 py-4 rounded-5 border-0 border-0">
              <div className=" mb-3 mx-auto text-end position-absolute bottom-0 end-0">
                <img src={img1} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Savings
              </h5>
              <p className="card-text pb-4">
                We encourage our members to cultivate a savings culture for their
                business and personal plans. You are not saving because you
                don&apos;t have but rather you and have because you are not
                saving.
                <span
                  className=" fw-bold text-primary pe-auto spanmodal"
                  onClick={handleSavingShow}
                >
                  See more.......
                </span>
              </p>
              <SavingModal
                show={showSavingModal}
                handleClose={handleSavingClose}
              />
            </div>
          </div>
          <SavingModal show={showSavingModal} handleClose={handleSavingClose} />
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card savings w-100 px-3 py-4 rounded-5 border-0 position-relative">
              <div className="text-end position-absolute bottom-0 end-0">
                <img src={img2} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">Loan</h5>
              <p className="card-text pb-4">
                We support businesses with our sms loan system. Our loan is
                designed to help you grow your business and achieve your goals.
                {/* <span
                  className=" fw-bold text-primary pe-auto moda"
                  onClick={handleSavingShow}
                >
                  See more.......
                </span> */}
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card invest bills w-100 px-3 py-4 rounded-5 border-0">
              <div className="text-end position-absolute bottom-0 end-0">
                <img src={img3} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Investment
              </h5>
              <p className="card-text pb-4">
                Our investment portfolio is open to members to earn at least 36%
                returns per anum. Members can invest in our agro business,
                mutual fund system, real estate and FG bond and trades
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card bg-light akawo w-100 px-3 py-4 rounded-5 border-0">
              <div className="mb-3 text-end position-absolute bottom-0 end-0">
                <img src={img4} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Bill Managment
              </h5>
              <p className="card-text pb-4">
                Allow your savings and investment returns sort out bill
                automatically without bordering yourself. This run on our payclob
                platform.
               
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card bg-light w-100 px-3 py-4 rounded-5 ajo border-0">
              <div className="text-end position-absolute bottom-0 end-0">
                <img src={img5} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Distributorship and Logistics
              </h5>
              <p className="card-text">
                We are into wholesale distribution and logistics. Members can
                request for goods from their savings balance, or down payment
                and as well our pay after order loan system
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card bg-light w-100 px-3 py-4 rounded-5 border-0">
              <div className="mb-3 text-end position-absolute bottom-0 end-0">
                <img src={img6} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Business Setup and Management
              </h5>
              <p className="card-text">
                We guide you through the process of setting up a business,
                getting the right business, the right location and staffing.
                <span className=" fw-bold text-primary modal">
                  See more.......
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card bg-light w-100 px-3 py-4 rounded-5 border-0">
              <div className="mb-3 text-end position-absolute bottom-0 end-0">
                <img src={img6} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-3">
                Consultancy
              </h5>
              <p className="card-text">
                {/* In many cases people have money but do not know where to put the
                money or invest in. That is why we want to help you set up
                profitable businesses, manage it and make sure it gets the right
                structure before handing it over to you. Eazybillz is the future
                you’ve been dreaming about */}
                We help your branding, business plan and registration, data and
                financial analysis of your business, business growth expertise,
                subletting services, asset and portfolio management, investment
                broker and management, IT services.
                <span className=" fw-bold text-primary modal">
                  See more.......
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
