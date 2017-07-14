import { combineReducers } from 'redux';
import auditSummary from './auditSummary';
import browserScope from './browserScope';
import css from './css';
import isModalVisible from './isModalVisible';

const rootReducer = combineReducers({
  auditSummary,
  browserScope,
  css,
  isModalVisible,
});

export default rootReducer;
