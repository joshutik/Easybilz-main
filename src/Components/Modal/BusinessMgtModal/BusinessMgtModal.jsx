// import React from 'react';
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const BusinessMgtModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Business Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          As a member, we have team that will help you get your business
          registered, come up with business ideas that u can invest in, run the
          business from scratch until it&apos;s viable. This focuses on our members
          that are civil servants, company staffs, etc that need another source
          of income but doesn&apos;t have the know how and the time to kick it up.
          The proposal is simple that you start earning from day one.
        </p>
        {/* Add more detailed content here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

BusinessMgtModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default BusinessMgtModal;
