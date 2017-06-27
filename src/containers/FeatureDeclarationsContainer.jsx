import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FeatureDeclarations from '../components/FeatureDeclarations';

class FeatureDeclarationsContainer extends Component {
  static mapPropsToState({ featureDeclarations }) {
    const limitedDeclarations = featureDeclarations.slice(0, 10);
    const limitDifference = featureDeclarations.length - limitedDeclarations.length;

    return { limitedDeclarations, limitDifference };
  }

  constructor(props) {
    super(props);

    const state = FeatureDeclarationsContainer.mapPropsToState(props);

    this.state = {
      ...state,
      limited: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextState = FeatureDeclarationsContainer.mapPropsToState(nextProps);

    this.setState(nextState);
  }

  render() {
    const { limited, limitDifference } = this.state;

    const displayedDeclarations = limited
      ? this.state.limitedDeclarations
      : this.props.featureDeclarations;

    const toggleButtonText = limited
      ? `Show ${limitDifference} more declarations...`
      : 'Show fewer declarations...';

    return (
      <FeatureDeclarations
        featureDeclarations={displayedDeclarations}
        limitDifference={limitDifference}
        onToggleLimit={() => this.setState({ limited: !limited })}
        toggleButtonText={toggleButtonText}
      />
    );
  }
}

FeatureDeclarationsContainer.propTypes = {
  featureDeclarations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeatureDeclarationsContainer;
