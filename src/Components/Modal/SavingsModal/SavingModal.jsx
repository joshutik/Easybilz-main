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
          1. Fix savings: <br />
          2. Target savings: <br />
          3. Daily/akawo savings <br />
          4. Bill savings. <br />
          5. Ajo contribution <br />
          
          Earn about 24% per anum for saving with us.
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
