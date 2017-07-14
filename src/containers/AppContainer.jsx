import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = ({ auditSummary }) => ({
  ...auditSummary,
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
