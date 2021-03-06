import React from 'react';
import { connect } from 'react-redux';
import hideModal from '../actions/hideModal';
import Modal from '../components/Modal';

const componentMap = {};

const mapStateToProps = ({ modal }) => {
  const ModalContent = componentMap[modal.componentName];

  return {
    children: ModalContent ? <ModalContent /> : null,
    show: modal.isVisible,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickOverlay: () => dispatch(hideModal()),
});

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
