import { useState } from "react";
import img1 from "../assets/fluent_savings-24-filled.png"
import img2 from "../assets/stash_target.png";
import img3 from "../assets/Vector (2).png";
import img4 from "../assets/icon-park-solid_stock-market.png";
import img5 from "../assets/fluent_savings-24-filled (1).png";
import img6 from "../assets/fluent_people-community-32-filled.png";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SavingModal from "../Modal/SavingsModal/SavingModal";
import InvestModal from "../Modal/InvestModal/InvestModal";
// import BusinessMgtModal from '../Modal/BusinessMgtModal/BusinessMgtModal';

const Services = () => {
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);
  const [showSavingModal, setShowSavingModal] = useState(false);
  // const [showMgtModal, setShowMgtModal] = useState(false);

  const handleInvestmentShow = () => setShowInvestmentModal(true);
  const handleInvestmentClose = () => setShowInvestmentModal(false);

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
                Fix Savings
              </h5>
              <p className="card-text">
                {/* Our investments is a purposefully motivated one aimed at easing
                an aspect your bills. We are focused on easing the financial
                burdens, building financial goals and billings of members and
                clients. The ROI is designed or tailored to ease a particular
                bil or bills.  */}
                As a cooperative we invest in 3 key areas of investments
                portfolios covering agriculture, real estate and
                trades/distributionship. Members can invest and earn as high as
                36% ROI per anum. Investing members can earn within 3, to 6 and
                12 months time. Investment is guaranteed and are insured.
                <span
                  className=" fw-bold text-primary pe-auto moda"
                  onClick={handleInvestmentShow}
                >
                  See more.......
                </span>
              </p>
            </div>
            <InvestModal
              show={showInvestmentModal}
              handleClose={handleInvestmentClose}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card savings w-100 px-3 py-4 rounded-5 border-0 position-relative">
              <div className="text-end position-absolute bottom-0 end-0">
                <img src={img2} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Target Savings
              </h5>
              <p className="card-text pb-4">
                Savings are a crucial aspect of financial health and stability.
                And we want to be able to help you achieve the highest levels of
                financial security and ease. With Eazybillz, you do not just
                save, you save to earn.
                <span
                  className=" fw-bold text-primary pe-auto moda"
                  onClick={handleSavingShow}
                >
                  See more.......
                </span>
              </p>
            </div>
            <SavingModal
              show={showSavingModal}
              handleClose={handleSavingClose}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card invest bills w-100 px-3 py-4 rounded-5 border-0">
              <div className="text-end position-absolute bottom-0 end-0">
                <img src={img3} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Save for bills
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
          {/* <div className="col-lg-4 col-md-6 col-sm-12">
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
          </div> */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card bg-light akawo w-100 px-3 py-4 rounded-5 border-0">
              <div className="mb-3 text-end position-absolute bottom-0 end-0">
                <img src={img4} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Akawo (Daily Market Savings)
              </h5>
              <p className="card-text">
                We manage and set up businesses for individuals and
                organizations. We have a team of business expert that can guild
                you into business ideas, and guild you through it. We also set
                up and run it for our busy members. We believe that multiple
                source of income is a sure way of sustaining financial stability
                and we are determined to help you get it.
                <span className=" fw-bold text-primary modal">
                  See more.......
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card bg-light w-100 px-3 py-4 rounded-5 ajo border-0">
                <div className="text-end position-absolute bottom-0 end-0">
                  <img src={img5} alt="" className="img-fluid w-75" />
                </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Ajo (Contribution)
              </h5>
              <p className="card-text">
                We manage and set up businesses for individuals and
                organizations. We have a team of business expert that can guild
                you into business ideas, and guild you through it. 
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card bg-light w-100 px-3 py-4 rounded-5 border-0">
              <div className="mb-3 text-end position-absolute bottom-0 end-0">
                <img src={img6} alt="" className="img-fluid w-75" />
              </div>
              <h5 className="card-title fs-3 fw-bold text-center my-4">
                Personal Savings
              </h5>
              <p className="card-text">
                {/* In many cases people have money but do not know where to put the
                money or invest in. That is why we want to help you set up
                profitable businesses, manage it and make sure it gets the right
                structure before handing it over to you. Eazybillz is the future
                you’ve been dreaming about */}
                We manage and set up businesses for individuals and
                organizations. We have a team of business expert that can guild
                you into business ideas, and guild you through it. We also set
                up and run it for our busy members. We believe that multiple
                source of income is a sure way of sustaining financial stability
                and we are determined to help you get it.
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
