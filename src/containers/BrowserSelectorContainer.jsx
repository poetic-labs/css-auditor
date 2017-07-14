import { connect } from 'react-redux';
import BrowserSelector from '../components/BrowserSelector';
import getFullBrowserScope from '../browsers/getFullBrowserScope';
import toggleBrowser from '../actions/toggleBrowser';
import toggleBrowserVersion from '../actions/toggleBrowserVersion';

const fullBrowserScope = getFullBrowserScope();

const getTotalVersionCount = browserId => (
  Object.keys(fullBrowserScope[browserId]).length
);

const getSelectedVersionCount = (versionSelections = {}) => (
  Object.keys(versionSelections)
    .filter(version => versionSelections[version] === true)
    .length
);

const mapStateToProps = (state, { browserId, browserName, versions, versionSelections }) => ({
  browserId,
  browserName,
  versions,
  versionSelections,
  allVersionsSelected: (
    getSelectedVersionCount(versionSelections) === getTotalVersionCount(browserId)
  ),
});

const mapDispatchToProps = (dispatch, { browserId }) => ({
  onToggleBrowser: event => (
    dispatch(toggleBrowser({
      browserId,
      checked: event.target.checked,
      fullVersionScope: fullBrowserScope[browserId],
    }))
  ),

  onToggleBrowserVersion: (event) => {
    dispatch(toggleBrowserVersion({ browserId, version: event.target.value }));
  },
});

const BrowserSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(BrowserSelector);

export default BrowserSelectorContainer;
