import PropTypes from 'prop-types';
import { keys } from 'lodash';
import React from 'react';
import browserDisplayNames from '../browsers/browserDisplayNames';
import supportTypes from '../maps/supportTypes';

const BrowsersSummary = ({ browserSupport }) => (
  <table>
    <caption>Browser Support Audit</caption>
    <thead>
      <tr>
        <th />
        {keys(supportTypes).map(key => (
          <th key={key}>{supportTypes[key]}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {keys(browserSupport).map((browser) => {
        const name = browserDisplayNames[browser];
        const support = browserSupport[browser];

        return (
          <tr key={browser}>
            <td>{name}</td>
            {keys(supportTypes).map(supportKey => (
              <td key={supportKey}>
                {(support[supportKey] || []).sort((a, b) => a - b).join(', ')}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
);

BrowsersSummary.propTypes = {
  browserSupport: PropTypes.object.isRequired,
};

export default BrowsersSummary;
