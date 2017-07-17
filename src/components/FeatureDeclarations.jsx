import PropTypes from 'prop-types';
import React from 'react';

const FeatureDeclarations = ({
  featureDeclarations, limitDifference, limited, onToggleLimit,
}) => (
  <div>
    <table className="app__table">
      <thead>
        <tr>
          <th className="app__th">Declaration</th>
          <th className="app__th">Line/Column</th>
        </tr>
      </thead>
      <tbody>
        {featureDeclarations.map(({ property, value, position: { start } }) => (
          <tr key={`${start.line}:${start.column}`} className="app__tr">
            <td className="app__td feature-declarations__td">{property}: {value}</td>
            <td className="app__td feature-declarations__td">{start.line}:{start.column}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {limitDifference > 0 &&
      <button
        className="feature-declarations__toggle-btn"
        onClick={onToggleLimit}
        type="button"
      >
        {limited
          ? `Show ${limitDifference} more declarations...`
          : 'Show fewer declarations...'}
      </button>
    }
  </div>
);

FeatureDeclarations.propTypes = {
  featureDeclarations: PropTypes.arrayOf(PropTypes.object).isRequired,
  limitDifference: PropTypes.number.isRequired,
  limited: PropTypes.bool.isRequired,
  onToggleLimit: PropTypes.func.isRequired,
};

export default FeatureDeclarations;
