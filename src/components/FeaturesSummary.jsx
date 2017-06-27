import PropTypes from 'prop-types';
import React from 'react';
import FeaturesList from './FeaturesList';

const FeaturesSummary = ({
  featureDeclarations, featureSupports, filter, renderToggleButton,
}) => (
  <div className="inner">
    <h2 className="aud-summary-heading">
      <span>Audit Summary</span>
      <div className="feature-audit-btns">
        {renderToggleButton({
          text: 'Declarations',
          filter: 'DECLARATIONS',
        })}
        {renderToggleButton({
          text: 'Browser Support',
          filter: 'BROWSER_SUPPORT',
        })}
      </div>
    </h2>
    <FeaturesList
      featureDeclarations={featureDeclarations}
      featureSupports={featureSupports}
      filter={filter}
    />
  </div>
);

FeaturesSummary.propTypes = {
  featureDeclarations: PropTypes.object.isRequired,
  featureSupports: PropTypes.object.isRequired,
  filter: PropTypes.oneOf(['DECLARATIONS', 'BROWSER_SUPPORT']).isRequired,
  renderToggleButton: PropTypes.func.isRequired,
};

export default FeaturesSummary;
