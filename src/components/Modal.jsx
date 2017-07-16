import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({ children, show, onClickOverlay }) => (
  <div className="modal-overlay__container">
    {show &&
      <div className="modal__container">
        {children}
      </div>
    }
    {show &&
      <div
        className="modal__overlay"
        onClick={onClickOverlay}
        role="presentation"
      />
    }
  </div>
);

Modal.propTypes = {
  onClickOverlay: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
