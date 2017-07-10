import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BrowserSelector from '../components/BrowserSelector';

class BrowserSelectorContainer extends Component {
  constructor(props) {
    super(props);

    this.onChangeVersions = this.onChangeVersions.bind(this);
  }

  onChangeVersions(event) {
    const { browserId, onChangeVersions, versionSelections } = this.props;
    const { value } = event.target;

    onChangeVersions({
      [browserId]: {
        ...versionSelections,
        [value]: !versionSelections[value],
      },
    });
  }

  render() {
    const {
      browserId,
      browserName,
      onToggleAllVersions,
      versionSelections,
      versions,
    } = this.props;

    return (
      <BrowserSelector
        allVersionsSelected={false}
        browserId={browserId}
        browserName={browserName}
        onChangeVersions={this.onChangeVersions}
        onToggleAllVersions={onToggleAllVersions}
        versions={versions}
        versionSelections={versionSelections}
      />
    );
  }
}

BrowserSelectorContainer.propTypes = {
  browserId: PropTypes.string.isRequired,
  browserName: PropTypes.string.isRequired,
  onChangeVersions: PropTypes.func.isRequired,
  onToggleAllVersions: PropTypes.func.isRequired,
  versions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  versionSelections: PropTypes.object,
};

BrowserSelectorContainer.defaultProps = {
  versionSelections: {},
};

export default BrowserSelectorContainer;
