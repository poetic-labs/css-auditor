import { keys } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import FeatureSupports from '../components/FeatureSupports';
import supportTypes from '../maps/supportTypes';

const filterBySupportTypes = (featureSupports) => {
  const filteredFeatureSupport = {};

  keys(featureSupports).map((browser) => {
    const browserSupport = featureSupports[browser];

    const definedSupport = keys(supportTypes).map(supportKey => (
      browserSupport[supportKey]
    )).filter(Boolean);

    if (definedSupport.length > 0) {
      filteredFeatureSupport[browser] = browserSupport;
    }
  });

  return filteredFeatureSupport;
};

const FeatureSupportContainer = ({ featureSupports }) => (
  <FeatureSupports
    featureSupports={filterBySupportTypes(featureSupports)}
  />
);

FeatureSupportContainer.propTypes = {
  featureSupports: PropTypes.object.isRequired,
};

export default FeatureSupportContainer;
