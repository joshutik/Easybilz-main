// import React from 'react';
import PropTypes from 'prop-types';
import './AddFundsModal.css'; // Create a separate CSS file for the modal styles

const AddFundsModal = ({ show, handleClose }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content-funds" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button type="button" className="close ms-auto" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
        <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="container fs-5">
                    <div className="card payment-card text-light px-4">
                      <hr className="hori-line" />
                      <div className="card-body">
                        <p>
                          Bank: <span className="pay-card">Sterling Bank</span>
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
        </div>
        {/* <div className="modal-footer">
          <button type="button" className="btn btn-secondary ms-auto" onClick={handleClose}>Close</button>
          
        </div> */}
      </div>
    </div>
  );
};

AddFundsModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

export default AddFundsModal;