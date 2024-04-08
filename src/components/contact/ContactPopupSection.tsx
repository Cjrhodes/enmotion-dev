import React from "react";
import EmailForm from "../form/EmailForm";
type Props = {
  sectionOpen: boolean;
  handleClose: () => void;
};
const ContactPopupSection = ({ sectionOpen, handleClose }: Props) => {
  return (
    <div
    className={`tc-popup-modal ${sectionOpen && "active"}`}
    id="popup-contact"
    data-bgcolor="#1a1f22"
  >
    <button
      className="tc-popup-close-btn"
      onClick={handleClose}
      data-close="popup-contact"
    >
      <i className="fa-solid fa-times"></i>
    </button>
    <EmailForm/>
  </div>
  );
};

export default ContactPopupSection;
