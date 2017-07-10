import PropTypes from 'prop-types';
import React from 'react';

const BrowserSelector = ({
  allVersionsSelected,
  browserId,
  browserName,
  onChangeVersions,
  onToggleAllVersions,
  versions,
  versionSelections,
}) => (
  <div>
    <input
      checked={allVersionsSelected}
      id={`${browserName}-browser-selector`}
      onChange={onToggleAllVersions}
      type="checkbox"
      value={browserName}
    />
    <h3 key={browserId}>
      <label htmlFor={`${browserName}-browser-selector`}>{browserName}</label>
    </h3>
    {versions.map((version) => {
      const inputId = `${browserId}-${version}-version-selector`;

      return (
        <div key={version} style={{ display: 'inline-block', width: '20%' }}>
          <label htmlFor={inputId}>
            <input
              checked={versionSelections[version] === true}
              id={inputId}
              onChange={onChangeVersions}
              type="checkbox"
              value={version}
            />
            {version}
          </label>
        </div>
      );
    })}
  </div>
);

BrowserSelector.propTypes = {
  allVersionsSelected: PropTypes.bool.isRequired,
  browserId: PropTypes.string.isRequired,
  browserName: PropTypes.string.isRequired,
  onChangeVersions: PropTypes.func.isRequired,
  onToggleAllVersions: PropTypes.func.isRequired,
  versions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  versionSelections: PropTypes.object.isRequired,
};

export default BrowserSelector;
