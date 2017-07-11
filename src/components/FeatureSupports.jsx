import { keys, values } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import browserDisplayNames from '../browsers/browserDisplayNames';
import supportTypes from '../maps/supportTypes';

const FeatureSupports = ({ featureSupports }) => (
  <table className="app__table">
    <thead>
      <tr>
        <th className="app__th">Browser</th>
        {values(supportTypes).map(supportType => (
          <th key={supportType} className="app__th">
            {supportType}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {keys(featureSupports).map((browser) => {
        const browserName = browserDisplayNames[browser];
        const browserSupport = featureSupports[browser];

        return (
          <tr key={browser} className="app__tr">
            <td className="app__td feature-supports__td">{browserName}</td>
            {keys(supportTypes).map(supportKey => (
              <td key={supportKey} className="app__td feature-supports__td">
                {browserSupport[supportKey]}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
);

FeatureSupports.propTypes = {
  featureSupports: PropTypes.object.isRequired,
};

export default FeatureSupports;
