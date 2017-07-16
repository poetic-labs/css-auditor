import { HIDE_MODAL, OPEN_MODAL } from '../actions/constants';

const getDefaultState = () => ({
  componentName: null,
  isVisible: false,
});

const modal = (state = getDefaultState(), {
  componentName = null,
  type,
}) => {
  switch (type) {
    case HIDE_MODAL:
      return {
        componentName,
        isVisible: false,
      };
    case OPEN_MODAL:
      return {
        componentName,
        isVisible: true,
      };
    default:
      return state;
  }
};

export default modal;
