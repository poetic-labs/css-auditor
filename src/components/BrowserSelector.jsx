import PropTypes from 'prop-types';
import React from 'react';

const BrowserSelector = ({
  allVersionsSelected,
  browserId,
  browserName,
  onToggleBrowser,
}) => {
  const browserInputId = `browser-selector__${browserId}`;

  return (
    <div>
      <input
        checked={allVersionsSelected}
        className="browser-selector__checkbox"
        id={browserInputId}
        onChange={onToggleBrowser}
        type="checkbox"
        value={browserId}
      />
      <label
        className="browser-selector__browser-name"
        htmlFor={browserInputId}
      >
        {browserName}
      </label>
    </div>
  );
};

BrowserSelector.propTypes = {
  allVersionsSelected: PropTypes.bool.isRequired,
  browserId: PropTypes.string.isRequired,
  browserName: PropTypes.string.isRequired,
  onToggleBrowser: PropTypes.func.isRequired,
};

export default BrowserSelector;
