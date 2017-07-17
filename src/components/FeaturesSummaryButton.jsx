import PropTypes from 'prop-types';
import React from 'react';

const FeaturesSummaryButton = ({ activeFilter, filter, onClick, text }) => {
  const className = activeFilter === filter
    ? 'app__btn-active'
    : 'app__btn-inactive';

  return (
    <button
      className={`features-summary__btn ${className}`}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

FeaturesSummaryButton.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired,
};

export default FeaturesSummaryButton;
