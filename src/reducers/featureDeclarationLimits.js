import {
  SET_AUDIT_SUMMARY,
  TOGGLE_FEATURE_DECLARATIONS_LIMIT,
} from '../actions/types';

const featureDeclarationLimits = (state = {}, action) => {
  switch (action.type) {
    case SET_AUDIT_SUMMARY: {
      const { featureDeclarations } = action.auditSummary;

      return Object.keys(featureDeclarations)
        .reduce((limits, feature) => ({
          ...limits,
          [feature]: true,
        }), {});
    }
    case TOGGLE_FEATURE_DECLARATIONS_LIMIT:
      return {
        ...state,
        [action.feature]: !state[action.feature],
      };
    default:
      return state;
  }
};

export default featureDeclarationLimits;
