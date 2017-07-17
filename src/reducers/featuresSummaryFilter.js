import { SET_FEATURES_SUMMARY_FILTER } from '../actions/types';

const featuresSummaryFilter = (state = 'BROWSER_SUPPORT', action) => {
  switch (action.type) {
    case SET_FEATURES_SUMMARY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default featuresSummaryFilter;
