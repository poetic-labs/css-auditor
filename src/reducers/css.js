import { SET_CSS } from '../actions/types';

const css = (state = '', action) => {
  switch (action.type) {
    case SET_CSS:
      return action.css;
    default:
      return state;
  }
};

export default css;
