import { connect } from 'react-redux';
import BrowserSelector from '../components/BrowserSelector';
import getFullBrowserScope from '../browsers/getFullBrowserScope';
import toggleBrowser from '../actions/toggleBrowser';

const fullBrowserScope = getFullBrowserScope();

const getTotalVersionCount = browserId => (
  Object.keys(fullBrowserScope[browserId]).length
);

const getSelectedVersionCount = (versionSelections = {}) => (
  Object.keys(versionSelections)
    .filter(version => versionSelections[version] === true)
    .length
);

const mapStateToProps = (state, { browserId, versionSelections }) => ({
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
});

const BrowserSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(BrowserSelector);

export default BrowserSelectorContainer;
