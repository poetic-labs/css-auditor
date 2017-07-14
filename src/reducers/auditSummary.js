import { SET_AUDIT_SUMMARY } from '../actions/constants';

const auditSummary = (state = {}, action) => {
  switch (action.type) {
    case SET_AUDIT_SUMMARY:
      return action.auditSummary;
    default:
      return state;
  }
};

export default auditSummary;
