import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import AuditFormContainer from '../containers/AuditFormContainer';
import FeaturesSummaryContainer from '../containers/FeaturesSummaryContainer';
import ModalContainer from '../containers/ModalContainer';
import '../styles/App.css';

const App = ({ featureDeclarations, featureSupports }) => (
  <div className="app__container">
    <ModalContainer />
    <AuditFormContainer />
    {!isEmpty(featureDeclarations) &&
      <FeaturesSummaryContainer
        featureDeclarations={featureDeclarations}
        featureSupports={featureSupports}
      />
    }
  </div>
);

App.propTypes = {
  featureDeclarations: PropTypes.object,
  featureSupports: PropTypes.object,
};

App.defaultProps = {
  featureDeclarations: {},
  featureSupports: {},
};

export default App;
