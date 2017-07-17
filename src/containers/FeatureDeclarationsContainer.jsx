import { connect } from 'react-redux';
import toggleFeatureDeclarationsLimit from '../actions/toggleFeatureDeclarationsLimit';
import FeatureDeclarations from '../components/FeatureDeclarations';

const mapStateToProps = ({ featureDeclarationLimits }, { feature, featureDeclarations }) => {
  const limited = featureDeclarationLimits[feature];
  const limit = 10;

  const displayedDeclarations = limited
    ? featureDeclarations.slice(0, limit)
    : featureDeclarations;

  return {
    featureDeclarations: displayedDeclarations,
    limitDifference: featureDeclarations.length - limit,
    limited,
  };
};

const mapDispatchToProps = (dispatch, { feature }) => ({
  onToggleLimit: () => dispatch(toggleFeatureDeclarationsLimit(feature)),
});

const FeatureDeclarationsContainer = connect(
  mapStateToProps, mapDispatchToProps)(FeatureDeclarations);

export default FeatureDeclarationsContainer;
