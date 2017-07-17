import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import FeaturesSummary from './FeaturesSummary';
import AuditFormContainer from '../containers/AuditFormContainer';
import ModalContainer from '../containers/ModalContainer';
import '../styles/App.css';

const App = ({ featureDeclarations }) => (
  <div className="app__container">
    <ModalContainer />
    <AuditFormContainer />
    {!isEmpty(featureDeclarations) &&
      <FeaturesSummary />
    }
  </div>
);

App.propTypes = {
  featureDeclarations: PropTypes.object,
};

App.defaultProps = {
  featureDeclarations: {},
};

export default App;
