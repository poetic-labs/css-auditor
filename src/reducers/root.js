import { combineReducers } from 'redux';
import auditSummary from './auditSummary';
import browserScope from './browserScope';
import css from './css';
import featureDeclarationLimits from './featureDeclarationLimits';
import modal from './modal';

const rootReducer = combineReducers({
  auditSummary,
  browserScope,
  css,
  featureDeclarationLimits,
  modal,
});

export default rootReducer;
