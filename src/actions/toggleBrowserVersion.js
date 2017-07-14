import { TOGGLE_BROWSER_VERSION } from './constants';

export default ({ browserId, version }) => ({
  type: TOGGLE_BROWSER_VERSION,
  browserId,
  version,
});
