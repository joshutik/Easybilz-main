import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";
import img1 from "../assets/footerLogo.png";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="">
        <div className="row mt-3 justify-content-center gy-3 py-3 ms-auto">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <img src={img1} alt="logo" className="img-fluid w-50" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className="text-decoration-underline ms-lg-5">Quick Links</h5>
            <ul className="list-unstyled quick-link ms-lg-5">
              <li>
                <a href="#" className="text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-decoration-none">
                  What we do
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="ms-md-3 ms-lg-5">
            <h5 className="text-decoration-underline">Legal</h5>
              <a href="#" className="terms text-decoration-none">Terms and conditions</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5 className="text-decoration-underline">Social</h5>
            <div>
              <a href="#"><i className="bi bi-facebook fs-4 "></i></a>
              <a href="#"><i className="bi bi-twitter fs-4 ms-2"></i></a>
              <a href="#"><i className="bi bi-instagram fs-4 ms-2"></i></a>
              <a href="#"><i className="bi bi-linkedin fs-4 ms-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
