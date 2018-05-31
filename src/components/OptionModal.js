import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearSelectedOption}
    contentLabel="Selected Option" 
    closeTimeoutMS={400} className="modal"
  >
    <h3 className="modal__title">Good luck on your quest.</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="btn btn-primary btn-raised btn-ripple" onClick={props.clearSelectedOption}>Okie Doke.</button>
  </Modal>
);
export default OptionModal;
