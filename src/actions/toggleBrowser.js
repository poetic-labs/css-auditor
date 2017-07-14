import { TOGGLE_BROWSER } from './constants';

export default ({ browserId, checked, fullVersionScope }) => ({
  type: TOGGLE_BROWSER,
  browserId,
  checked,
  fullVersionScope,
});
