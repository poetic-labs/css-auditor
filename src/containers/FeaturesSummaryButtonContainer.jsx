import { connect } from 'react-redux'
import setFeaturesSummaryFilter from '../actions/setFeaturesSummaryFilter';
import FeaturesSummaryButton from '../components/FeaturesSummaryButton';

const mapStateToProps = ({ featuresSummaryFilter }) => ({
  activeFilter: featuresSummaryFilter,
});

const mapDispatchToProps = (dispatch, { filter }) => ({
  onClick: () => dispatch(setFeaturesSummaryFilter(filter)),
});

const FeaturesSummaryButtonContainer = connect(
  mapStateToProps, mapDispatchToProps)(FeaturesSummaryButton);

export default FeaturesSummaryButtonContainer;
