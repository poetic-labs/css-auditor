import PropTypes from 'prop-types';
import React from 'react';
import BrowserSelectorContainer from '../containers/BrowserSelectorContainer';

const BrowserScope = ({
  browserFilter,
  browserScope,
  browserVersions,
  onChangeBrowserVersions,
  onSelectBrowserFilter,
}) => (
  <div>
    <select value={browserFilter} onChange={onSelectBrowserFilter}>
      <option value="ALL_BROWSERS">Target all browsers</option>
      <option value="SELECT_BROWSERS">Select browsers</option>
    </select>
    {browserFilter === 'SELECT_BROWSERS' &&
      <ul className="aud-browsers-ul">
        {browserVersions.map(({ id, name, versions }) => (
          <li key={name} className="aud-browsers-li">
            <BrowserSelectorContainer
              browserId={id}
              browserName={name}
              onChangeVersions={onChangeBrowserVersions}
              versions={versions}
              versionSelections={browserScope[id]}
            />
          </li>
        ))}
      </ul>
    }
  </div>
);

BrowserScope.propTypes = {
  browserFilter: PropTypes.oneOf(['ALL_BROWSERS', 'SELECT_BROWSERS']).isRequired,
  browserScope: PropTypes.object.isRequired,
  browserVersions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onChangeBrowserVersions: PropTypes.func.isRequired,
  onSelectBrowserFilter: PropTypes.func.isRequired,
};

export default BrowserScope;
