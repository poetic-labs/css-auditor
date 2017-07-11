import { keys } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import FeatureDeclarationsContainer from '../containers/FeatureDeclarationsContainer';
import FeatureSupportsContainer from '../containers/FeatureSupportsContainer';

const FeaturesList = ({ featureDeclarations, featureSupports, filter }) => (
  <ul>
    {keys(featureDeclarations).map(feature => (
      <li className="features-list__feature-item" key={feature}>
        <h3 className="app__h3">
          <a
            href={`http://caniuse.com/#feat=${feature}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {feature}
          </a>
        </h3>
        {filter === 'DECLARATIONS' &&
          <FeatureDeclarationsContainer featureDeclarations={featureDeclarations[feature]} />
        }
        {filter === 'BROWSER_SUPPORT' &&
          <FeatureSupportsContainer featureSupports={featureSupports[feature]} />
        }
      </li>
    ))}
  </ul>
);

FeaturesList.propTypes = {
  featureDeclarations: PropTypes.object.isRequired,
  featureSupports: PropTypes.object.isRequired,
  filter: PropTypes.oneOf(['DECLARATIONS', 'BROWSER_SUPPORT']).isRequired,
};

export default FeaturesList;
