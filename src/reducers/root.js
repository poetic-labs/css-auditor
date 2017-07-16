import { combineReducers } from 'redux';
import auditSummary from './auditSummary';
import browserScope from './browserScope';
import css from './css';
import modal from './modal';

const rootReducer = combineReducers({
  auditSummary,
  browserScope,
  css,
  modal,
});

export default rootReducer;
