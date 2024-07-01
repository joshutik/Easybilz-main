// import React from 'react';
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const SavingModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Savings Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Fix Savings: Here we encourage members to learn how to save and leave
          it for a long term. They earn about 20% interest for 6 to 12 months.
          Target Savings: Members are encouraged to save for a particular
          target, from house rent, to school fees...to appliances etc. Members
          earn about 5 to 10% interest over 6 to 12months Akawo (daily savings):
          Members are encouraged to save daily. This is withdrawable anytime.
          Members can earn over 10% on savings. Bills Savings: Member are
          encouraged to fix a savings to cover for their bills. Here they are
          invest with the corporative and use their ROI to cover for all their
          reoccurring daily, monthly and household demands. Ajo (contribution
          packages): Members are required to choose a contribution plan that
          fits their budget. ₦20,000 for ₦200,000 ₦50,000 for ₦500,000 ₦10,000 for ₦100,000 ₦5,000 for ₦50,000
          ₦3,000 for ₦30,000.
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

SavingModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default SavingModal;
