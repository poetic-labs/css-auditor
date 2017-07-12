import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({ content, show, onClickOverlay }) => (
  <div className="modal-overlay__container">
    {show &&
      <div className="modal__container">
        {content}
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
  content: PropTypes.element,
};

Modal.defaultProps = {
  content: null,
};

export default Modal;
