import PropTypes from 'prop-types';
import React from 'react';
import BrowserSelectorContainer from '../containers/BrowserSelectorContainer';

const BrowserScope = ({
  browserScope,
  browserVersions,
  hasSelectedAllBrowsers,
  onToggleAllBrowsers,
}) => (
  <aside className="app__clearfix browser-scope__container">
    <h2 className="browser-scope__target-browsers">
      <input
        checked={hasSelectedAllBrowsers}
        className="browser-scope__checkbox"
        onChange={onToggleAllBrowsers}
        type="checkbox"
      />
      <span>Target Browsers</span>
    </h2>
    <ul className="browser-scope__browsers-list">
      {browserVersions.map(({ id, name, versions }) => (
        <li className="browser-scope__browser-item" key={name}>
          <BrowserSelectorContainer
            browserId={id}
            browserName={name}
            versions={versions}
            versionSelections={browserScope[id]}
          />
        </li>
      ))}
    </ul>
  </aside>
);

BrowserScope.propTypes = {
  browserScope: PropTypes.object.isRequired,
  browserVersions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  hasSelectedAllBrowsers: PropTypes.bool.isRequired,
  onToggleAllBrowsers: PropTypes.func.isRequired,
};

export default BrowserScope;
