import { connect } from 'react-redux';
import hideModal from '../actions/hideModal';
import Modal from '../components/Modal';

const mapStateToProps = ({ isModalVisible }) => ({
  show: isModalVisible,
});

const mapDispatchToProps = dispatch => ({
  onClickOverlay: () => dispatch(hideModal()),
});

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
