import { keys, values } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import browserDisplayNames from '../browsers/browserDisplayNames';
import supportTypes from '../maps/supportTypes';

const FeatureSupports = ({ featureSupports }) => (
  <table className="aud-table">
    <thead>
      <tr>
        <th className="aud-th">Browser</th>
        {values(supportTypes).map(supportType => (
          <th key={supportType} className="aud-th">
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
          <tr key={browser} className="aud-tr">
            <td className="aud-td feature-supports__td">{browserName}</td>
            {keys(supportTypes).map(supportKey => (
              <td key={supportKey} className="aud-td feature-supports__td">
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
