import {
  TOGGLE_ALL_BROWSERS,
  TOGGLE_BROWSER,
  TOGGLE_BROWSER_VERSION,
} from '../actions/constants';
import getFullBrowserScope from '../browsers/getFullBrowserScope';

const browserScope = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_ALL_BROWSERS:
      return action.checked ? getFullBrowserScope() : {};
    case TOGGLE_BROWSER: {
      const { browserId, checked, fullVersionScope } = action;

      const versionSelections = checked
        ? { ...fullVersionScope }
        : {};

      return {
        ...state,
        [browserId]: versionSelections,
      };
    }
    case TOGGLE_BROWSER_VERSION: {
      const { browserId, version } = action;
      const versionSelections = state[browserId] || {};

      return {
        ...state,
        [browserId]: {
          ...versionSelections,
          [version]: !versionSelections[version],
        },
      };
    }
    default:
      return state;
  }
};

export default browserScope;
