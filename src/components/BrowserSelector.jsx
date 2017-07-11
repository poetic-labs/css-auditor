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
}) => {
  const browserInputId = `browser-selector__${browserName}`;

  return (
    <div>
      <input
        checked={allVersionsSelected}
        className="browser-selector__checkbox"
        id={browserInputId}
        onChange={onToggleAllVersions}
        type="checkbox"
        value={browserName}
      />
      <label htmlFor={browserInputId}>{browserName}</label>
      <ul className="browser-selector__versions-list-ul" style={{ display: 'none' }}>
        {versions.map((version) => {
          const versionInputId = `browser-selector__${browserId}-${version}`;

          return (
            <li key={version} className="browser-selector__version-item">
              <label htmlFor={versionInputId}>
                <input
                  checked={versionSelections[version] === true}
                  className="browser-selector__checkbox"
                  id={versionInputId}
                  onChange={onChangeVersions}
                  type="checkbox"
                  value={version}
                />
                {version}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

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
