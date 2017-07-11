import PropTypes from 'prop-types';
import React from 'react';
import BrowserSelectorContainer from '../containers/BrowserSelectorContainer';

const BrowserScope = ({
  browserScope,
  browserVersions,
  onChangeBrowserVersions,
}) => (
  <aside>
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
  </aside>
);

BrowserScope.propTypes = {
  browserScope: PropTypes.object.isRequired,
  browserVersions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onChangeBrowserVersions: PropTypes.func.isRequired,
};

export default BrowserScope;
