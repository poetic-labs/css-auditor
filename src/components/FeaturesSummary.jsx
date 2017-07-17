import React from 'react';
import FeaturesListContainer from '../containers/FeaturesListContainer';
import FeaturesSummaryButtonContainer from '../containers/FeaturesSummaryButtonContainer';

const FeaturesSummary = () => (
  <div className="app__inner">
    <h2 className="features-summary__heading">
      <span>Audit Summary</span>
      <div className="features-summary__btns">
        <FeaturesSummaryButtonContainer
          filter="BROWSER_SUPPORT"
          text="Browser Support"
        />
        <FeaturesSummaryButtonContainer
          filter="DECLARATIONS"
          text="Declarations"
        />
      </div>
    </h2>
    <FeaturesListContainer />
  </div>
);

export default FeaturesSummary;
