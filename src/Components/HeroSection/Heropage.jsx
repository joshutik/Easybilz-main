import "./Heropage.css";
import img2 from "../assets/hero parthern.png";
import CustomCarouselForHome from "../CarouselHomePage/CustomCarouselForHome";
import { Link } from "react-router-dom";
// import img3 from "../assets/TransLogo.png";

const Heropage = () => {
  return (
    <div>
      <section className="container-fluid hero-page pb-0">
        <div className="container pt-5">
          <div className="row align-items-center min-vh-100 justify-content-center  mt-5 parent">
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
                <Link
                  to={"/register"}
                  className="btn btn-hero px-5 py-2 text-light rounded-pill"
                >
                  Create Account
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 position-relative">
              <div className="hero-img mt-0">
                <CustomCarouselForHome />
                {/* <img
                  src={img1}
                  alt="lady with phone"
                  className="img-fluid pt-5 mt-lg-5 hero-img-1 w-100"
                /> */}
                <img
                  src={img2}
                  alt="logo parthern"
                  className="img-fluid path-logo position-absolute z-1 top-50 start-50 translate-middle-x"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid w-100 px-lg-4">
          <div className="card who-card rounded-5">
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
                  {/* Easybillz multipurpose cooperative society Ltd (Eazybillz
                  co-op) is a savings, credit and investments cooporative
                  society with a multipurpose operations tailored to promote the
                  economic interests of her members. Our primary objective is to
                  make the financial journey of every individuals and businesses
                  that&apos;s a member easy, simple and attainable. We achieve this
                  by promoting basic financial tools and engaging our members in
                  various investment and enterprises. */}
                  Easybillz multipurpose cooperative society Ltd is a savings,
                  credit and investment cooperative society. Our primary
                  objective is to make the financial journey of every individual
                  and business that&apos; s a member easy, simple and
                  attainable.
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
