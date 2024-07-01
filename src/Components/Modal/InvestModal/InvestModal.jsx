// import React from 'react';
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const InvestModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Investment Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Investments Portfolio: Fixed invest: members and non members are
          encouraged to invest a fixed amount of money and can earn about 25% to
          60% within 6 to 12months. Agriculture Package: Members are to invest
          as small as ₦5000 In the cassava processing farm operated by the
          cooperative and can earn at least 5% ROI on amount invested. Real
          Estate: Members and non members can invest in the real estates
          investments portfolio of the corporative and earn At most 70% returns,
          own their own properties and land banking. Members can save towards
          acquiring a property as well.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

InvestModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default InvestModal;
