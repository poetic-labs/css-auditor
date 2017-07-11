import PropTypes from 'prop-types';
import React from 'react';

const FeatureDeclarations = ({
  featureDeclarations, limitDifference, onToggleLimit, toggleButtonText,
}) => (
  <div>
    <table className="aud-table">
      <thead>
        <tr>
          <th className="aud-th">Declaration</th>
          <th className="aud-th">Line/Column</th>
        </tr>
      </thead>
      <tbody>
        {featureDeclarations.map(({ property, value, position: { start } }) => (
          <tr key={`${start.line}:${start.column}`} className="aud-tr">
            <td className="aud-td feature-declarations__td">{property}: {value}</td>
            <td className="aud-td feature-declarations__td">{start.line}:{start.column}</td>
          </tr>
        ))}
      </tbody>
    </table>
    { limitDifference > 0 &&
      <button
        className="feature-declarations__toggle-btn"
        onClick={onToggleLimit}
        type="button"
      >
        {toggleButtonText}
      </button>
    }
  </div>
);

FeatureDeclarations.propTypes = {
  featureDeclarations: PropTypes.arrayOf(PropTypes.object).isRequired,
  limitDifference: PropTypes.number.isRequired,
  onToggleLimit: PropTypes.func.isRequired,
  toggleButtonText: PropTypes.string.isRequired,
};

export default FeatureDeclarations;
