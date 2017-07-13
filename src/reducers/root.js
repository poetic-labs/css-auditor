import { combineReducers } from 'redux';
import isModalVisible from './isModalVisible';

const rootReducer = combineReducers({
  isModalVisible,
});

export default rootReducer;
