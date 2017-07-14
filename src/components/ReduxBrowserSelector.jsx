import PropTypes from 'prop-types';
import React from 'react';

const BrowserSelector = ({
  allVersionsSelected,
  browserId,
  browserName,
  onToggleBrowser,
  onToggleBrowserVersion,
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
        onChange={onToggleBrowser}
        type="checkbox"
        value={browserName}
      />
      <label
        className="browser-selector__browser-name"
        htmlFor={browserInputId}
      >
        {browserName}
      </label>
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
                  onChange={onToggleBrowserVersion}
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
  onToggleBrowser: PropTypes.func.isRequired,
  onToggleBrowserVersion: PropTypes.func.isRequired,
  versions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  versionSelections: PropTypes.object,
};

BrowserSelector.defaultProps = {
  versionSelections: {},
};

export default BrowserSelector;
