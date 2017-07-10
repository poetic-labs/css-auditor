import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BrowserSelector from '../components/BrowserSelector';
import fullBrowserScope from '../browsers/fullBrowserScope';

class BrowserSelectorContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalVersions: Object.keys(fullBrowserScope[props.browserId]).length,
    };

    this.onChangeVersions = this.onChangeVersions.bind(this);
    this.onToggleAllVersions = this.onToggleAllVersions.bind(this);
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

  onToggleAllVersions(event) {
    const { browserId, onChangeVersions } = this.props;
    const { checked } = event.target;

    const versionsSelected = checked
      ? { ...fullBrowserScope[browserId] }
      : {};

    onChangeVersions({
      [browserId]: versionsSelected,
    });
  }

  countSelectedVersions() {
    const { versionSelections } = this.props;

    return Object.keys(versionSelections)
                 .filter(version => versionSelections[version] === true)
                 .length;
  }

  render() {
    const {
      browserId,
      browserName,
      versionSelections,
      versions,
    } = this.props;

    const allVersionsSelected = this.countSelectedVersions() === this.state.totalVersions;

    return (
      <BrowserSelector
        allVersionsSelected={allVersionsSelected}
        browserId={browserId}
        browserName={browserName}
        onChangeVersions={this.onChangeVersions}
        onToggleAllVersions={this.onToggleAllVersions}
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
  versions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  versionSelections: PropTypes.object,
};

BrowserSelectorContainer.defaultProps = {
  versionSelections: {},
};

export default BrowserSelectorContainer;
