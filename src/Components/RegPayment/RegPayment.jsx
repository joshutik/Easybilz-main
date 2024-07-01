import { useState } from 'react';
import './RegPayment.css';
import logo from "../assets/Logo.png";
import topPattern from "../assets/upPattern.png";
import bottomPattern from "../assets/Patterns.png";
import { Link, useNavigate } from "react-router-dom";

const RegPayment = () => {
  const apiHostname = import.meta.env.VITE_API_HOSTNAME || 'https://easybilz-api.onrender.com';
  // const apiHostname = import.meta.env.VITE_API_HOSTNAME || 'http://127.0.0.1:9090';

  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const authToken = localStorage.getItem('authtoken'); // Get the auth token from local storage
  // console.log("authToken", authToken);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const generateReceiptNumber = () => {
    const prefix = "EAZY";
    const suffix = "BILZ";
    const randomNumber = Math.floor(100000000000 + Math.random() * 900000000000); // Generate random 12-digit number
    return `${prefix}${randomNumber}${suffix}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {

      const authToken = localStorage.getItem('authtoken'); // Get the auth token from local storage
      const user = localStorage.getItem('user'); // Get the auth token from local storage
   
      const formData = new FormData();
      formData.append('user', user);
      formData.append('upload', selectedFile);
      formData.append('receipt_number', generateReceiptNumber());
      formData.append('details', "Test Receipt do not process");

      // console.log("selectedFile", selectedFile);
     
      try {
        const response = await fetch(`${apiHostname}/payment/api/receipts/`, {
        
          method: 'POST',
          body: formData,
          headers: {
            'Authorization': `Bearer ${authToken}`, // Include the Authorization header
          },
          credentials: 'include', // This is to include cookies if your backend needs it for authentication
        });

        if (response.ok) {
          const result = await response.json();
          setMessage('Receipt uploaded successfully!');
          console.log('Success:', result);

          setTimeout(() => {
            navigate("/heropage");
          }, 3000); // Wait for 3 seconds before navigating

        } else {
          setMessage('Failed to upload receipt.');
          console.log('Upload failed:', response.statusText);
        }
      } catch (error) {
        setMessage('An error occurred while uploading the receipt.');
        console.error('Error:', error);
      }
    } else {
      setMessage('No file selected');
    }
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center min-vh-100 register-bg position-relative">
          <div className="container-fluid col-md-6 col-sm-12">
            <div className="container text-light mt-5">
              <div className="position-absolute top-0 bottom-0 mt-4 ms-auto ms-lg-5">
              <Link to={'/homepage'}>
                    <img
                      src={logo}
                      alt="EasyBilz"
                      width="170"
                      height="100"
                      className="img-fluid"
                    />
                  </Link>
              </div>
              <p className="fs-3 px-4 pt-5 mt-5">
                Freedom starts with financial security. Grow yours today.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-0">
            <div className="tp-pattern">
              <img src={topPattern} alt="top pattern" className="img-fluid" />
            </div>
            <div className="container my-5">
              <Link to={'/register'} className="ms-5 text-decoration-none">
                <i className="bi bi-chevron-left"></i> Go back
              </Link>
            </div>
            <h2 className="fw-bold text-center">Register</h2>
            <div className="w-75 mx-auto">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="container fs-5">
                    <div className="card payment-card text-light px-4 ">
                      <p className="text-center mt-3">
                        Kindly pay <span className="fee">#2,000 NGN</span> to
                        the account number below and upload the receipt below:
                      </p>
                      <hr className="hori-line" />
                      <div className="card-body">
                        <p>
                          Bank: <span className="pay-card">Stailing Bank</span>
                          <br />
                          Account Number:{" "}
                          <span className="pay-card">0098737021</span>
                          <br />
                          Account Name:{" "}
                          <span className="pay-card">
                            Easybillz Co-operative Society Limited
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="container-fluid fs-5 mt-5">
                    <div 
                      className={`file-upload-container card rounded-5 upload-card py-5 file-upload-form ${
                        isDragging ? "dragging" : ""
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        id="file-upload"
                        onChange={handleFileChange}
                        className="file-input"
                      />
                      <label htmlFor="file-upload" className="file-label px-3 py-2">
                        <span role="img" aria-label="paperclip">
                          <i className="bi bi-paperclip"></i>
                        </span>{" "}
                        {selectedFile ? selectedFile.name : "Upload receipt"}
                      </label>
                      <span className="drag-text">or drag and drop here</span>
                    </div>
                    <div className="container mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 rounded-5 fs-4"
                      >
                        Submit
                      </button>
                      {message && <p className="mt-3">{message}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bt-pattern">
              <img
                src={bottomPattern}
                alt="bottom pattern"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegPayment;
