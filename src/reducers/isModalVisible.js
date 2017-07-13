import { HIDE_MODAL, OPEN_MODAL } from '../actions/constants';

const isModalVisible = (state = true, { type }) => {
  switch (type) {
    case HIDE_MODAL:
      return false;
    case OPEN_MODAL:
      return true;
    default:
      return state;
  }
};

export default isModalVisible;
