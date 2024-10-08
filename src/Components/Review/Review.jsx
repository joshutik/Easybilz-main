import Ratio from "react-bootstrap/Ratio";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div className="container-fluid">
      <div className="header text-center w-75 mx-auto mt-5">
        <h2 className="fw-bold">Member’s Review</h2>
        <p>
          We are 100% trustworthy that’s why our members only have great things
          to say about us.{" "}
          <Link to={"/register"} href="#">
            Join us
          </Link>{" "}
          today and secure your future through our savings and investment
          feature.
        </p>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center mt-4 gy-3">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card border-0">
              <Ratio aspectRatio="4x3" className="rounded-5">
                {/* <iframe
                  className="rounded-5 btn disabled border-0"
                  width="853"
                  height="480"
                  src="https://www.youtube.com/embed/3rPIp11cy54"
                  title="Nosa - We Raise a Sound (feat. 121Selah) | Official Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe> */}
                <iframe className="rounded-5 btn disabled border-0"
                  width="853"
                  height="480"
                  src="https://www.youtube.com/embed/fuiiJuB7tJs"
                  title="Loans 101 (Loan Basics 1/3)"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Ratio>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card border-0">
              <Ratio aspectRatio="4x3">
                {/* <iframe className="rounded-5 btn disabled border-0"
                  width="853"
                  height="480"
                  src="https://www.youtube.com/embed/wAZzyt3goVo"
                  title="KB, Dayshawnx - Daddy (Official Audio)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe> */}
                <iframe
                  className="rounded-5 btn disabled border-0"
                  width="853"
                  height="480"
                  src="https://www.youtube.com/embed/v-mlEQ7KW5Q"
                  title="Savings Goals for Kids | What are Savings goals? |Financial education for kids | Teaching money kids"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Ratio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
