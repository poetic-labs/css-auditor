import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FeaturesSummary from '../components/FeaturesSummary';

class FeaturesSummaryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'DECLARATIONS',
    };

    this.renderToggleButton = this.renderToggleButton.bind(this);
  }

  renderToggleButton({ text, filter }) {
    const className = this.state.filter === filter
      ? 'aud-btn-active'
      : 'aud-btn-inactive';

    return (
      <button
        className={`feature-aud-btn ${className}`}
        onClick={() => this.setState({ filter })}
        type="button"
      >
        {text}
      </button>
    );
  }

  render() {
    const { featureDeclarations, featureSupports } = this.props;
    const { filter } = this.state;

    return (
      <FeaturesSummary
        featureDeclarations={featureDeclarations}
        featureSupports={featureSupports}
        filter={filter}
        renderToggleButton={this.renderToggleButton}
      />
    );
  }
}

FeaturesSummaryContainer.propTypes = {
  featureDeclarations: PropTypes.object.isRequired,
  featureSupports: PropTypes.object.isRequired,
};

export default FeaturesSummaryContainer;
