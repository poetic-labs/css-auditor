import { connect } from 'react-redux';
import FeaturesList from '../components/FeaturesList';

const mapStateToProps = ({ auditSummary, featuresSummaryFilter }) => ({
  featureDeclarations: auditSummary.featureDeclarations,
  featureSupports: auditSummary.featureSupports,
  filter: featuresSummaryFilter,
});

const FeaturesListContainer = connect(mapStateToProps)(FeaturesList);

export default FeaturesListContainer;
