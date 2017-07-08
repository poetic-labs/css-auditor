import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BrowserSelector from '../components/BrowserSelector';

class BrowserSelectorContainer extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { id, onChange, selections } = this.props;
    const { value } = event.target;

    onChange(id, {
      ...selections,
      [value]: !selections[value],
    });
  }

  render() {
    const { id, name, selections, versions } = this.props;

    return (
      <BrowserSelector
        id={id}
        name={name}
        onChange={this.onChange}
        selections={selections}
        versions={versions}
      />
    );
  }
}

BrowserSelectorContainer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  versions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selections: PropTypes.object,
};

BrowserSelectorContainer.defaultProps = {
  selections: {},
};

export default BrowserSelectorContainer;
