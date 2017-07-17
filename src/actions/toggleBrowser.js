import { TOGGLE_BROWSER } from './types';

export default ({ browserId, checked, fullVersionScope }) => ({
  type: TOGGLE_BROWSER,
  browserId,
  checked,
  fullVersionScope,
});
