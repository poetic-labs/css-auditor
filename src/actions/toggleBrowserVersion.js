import { TOGGLE_BROWSER_VERSION } from './types';

export default ({ browserId, version }) => ({
  type: TOGGLE_BROWSER_VERSION,
  browserId,
  version,
});
