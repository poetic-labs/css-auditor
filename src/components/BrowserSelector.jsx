import PropTypes from 'prop-types';
import React from 'react';

const BrowserSelector = ({ id, name, onChange, selections, versions }) => (
  <div>
    <div key={id}>{name}</div>
    {versions.map((version) => {
      const inputId = `${id}-${version}-selector`;

      return (
        <div key={version}>
          <label htmlFor={inputId}>
            <input
              checked={selections[version] === true}
              id={inputId}
              onChange={onChange}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selections: PropTypes.object.isRequired,
  versions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default BrowserSelector;
