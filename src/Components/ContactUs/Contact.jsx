import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomCarousel from "../Carousel/CustomCarousel"; // Import the renamed component
import "./Contact.css";
import { API_BASE_URL } from '../../config';

const Contact = () => {
  const apiHostname = API_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // State for tracking loading status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form submission starts
    axios
      .post(`${apiHostname}/user/contact_admin_email/`, formData)
      .then((response) => {
        setLoading(false); // Set loading to false when the form submission ends
        // Handle success
        console.log("Form submitted successfully:", response);
        alert("Form submitted successfully:");
        window.location.reload()
        // setTimeout(()=>{window.location.reload()}, 3000);
      })
      .catch((error) => {
        setLoading(false); // Set loading to false if there is an error
        // Handle error
        console.error("Error submitting form:", error);
        
        setTimeout(()=>{window.location.reload()}, 5000);

        

      });
  };

  return (
    <div className="container-fluid">
      <div className="container my-5">
        <div className="text-center py-4">
          <h2 className="fw-bold">Contact Us</h2>
          <p>
            Visit, call or message us today. We can’t wait to hear from you😊.
          </p>
        </div>

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <CustomCarousel />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <i className="bi bi-geo-alt-fill fs-4"></i> 57 Woji Road, GRA
              phase 2 Port Harcourt.
            </div>

            <div>
              <i className="bi bi-telephone-fill fs-4"></i> 070 3702 1175, 081
              0426 3860
            </div>
            <div>
              <i className="bi bi-envelope-fill fs-4"></i>{" "}
              <a
                href="mailto:Easybillz@gmail.com"
                className="text-decoration-none"
              >
                Easybillz@gmail.com
              </a>
            </div>
            <div>
              <i className="bi bi-globe2 fs-4"></i>{" "}
              <a
                href="http://www.easybillz.com"
                className="text-decoration-none"
              >
                www.easybillz.com
              </a>
            </div>
            <div className="w-100">
              <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name"
                    className="form-control rounded-4 w-100 "
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group my-3">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    name="phone"
                    id="phone"
                    className="form-control rounded-4 w-100"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-100 position-relative">
                  <textarea
                    name="message"
                    placeholder="Type a message..."
                    id="message"
                    cols="30"
                    rows="5"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="btn rounded-pill px-4 mt-3 position-absolute bottom-0 end-0 send border-0"
                    disabled={loading} // Disable the button when loading
                  >
                    {loading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
