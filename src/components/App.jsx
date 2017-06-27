import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import AuditFormContainer from '../containers/AuditFormContainer';
import FeaturesSummaryContainer from '../containers/FeaturesSummaryContainer';
import '../styles/App.css';

const App = ({ featureDeclarations, featureSupports, onAudit }) => (
  <div>
    <AuditFormContainer
      onAudit={onAudit}
    />
    {!isEmpty(featureDeclarations) &&
      <FeaturesSummaryContainer
        featureDeclarations={featureDeclarations}
        featureSupports={featureSupports}
      />
    }
  </div>
);

App.propTypes = {
  onAudit: PropTypes.func.isRequired,
  featureDeclarations: PropTypes.object,
  featureSupports: PropTypes.object,
};

App.defaultProps = {
  featureDeclarations: {},
  featureSupports: {},
};

export default App;
