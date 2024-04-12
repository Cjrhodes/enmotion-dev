'use client';
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ResendForm from "./ResendForm"; // Assuming ResendForm is a default export

const ResendModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>Open Resend Modal</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Resend with Vercel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResendForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResendModal;