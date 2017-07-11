import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuditForm from '../components/AuditForm';
import audit from '../audit';
import browserVersions from '../browsers/browserVersions';
import getFullBrowserScope from '../browsers/getFullBrowserScope';

class AuditFormContainer extends Component {
  constructor(props) {
    super(props);

    const browserScope = getFullBrowserScope();

    this.state = {
      browserScope,
      css: '',
      totalBrowserCount: Object.keys(browserScope).length,
    };

    this.onChangeBrowserVersions = this.onChangeBrowserVersions.bind(this);
    this.onChangeCss = this.onChangeCss.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onToggleAllBrowsers = this.onToggleAllBrowsers.bind(this);
  }

  onChangeBrowserVersions(changedBrowserVersions) {
    this.setState({
      browserScope: {
        ...this.state.browserScope,
        ...changedBrowserVersions,
      },
    });
  }

  onChangeCss(event) {
    this.setState({ css: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const { onAudit } = this.props;
    const { css, browserScope } = this.state;

    try {
      const auditSummary = audit(css, browserScope);

      onAudit(auditSummary);
    } catch (error) {
      alert(error.message);
    }
  }

  onToggleAllBrowsers(event) {
    const { checked } = event.target;

    this.setState({
      browserScope: checked ? getFullBrowserScope() : {},
    });
  }

  getSelectedBrowserCount() {
    const { browserScope } = this.state;

    return Object.keys(browserScope)
      .filter((browser) => {
        const versions = browserScope[browser];

        return Object.keys(versions).some(version => versions[version] === true);
      })
      .length;
  }

  render() {
    const { browserScope, css, totalBrowserCount } = this.state;

    const hasSelectedAllBrowsers = this.getSelectedBrowserCount() === totalBrowserCount;

    return (
      <AuditForm
        browserScope={browserScope}
        browserVersions={browserVersions}
        css={css}
        hasSelectedAllBrowsers={hasSelectedAllBrowsers}
        onChangeBrowserVersions={this.onChangeBrowserVersions}
        onChangeCss={this.onChangeCss}
        onSubmit={this.onSubmit}
        onToggleAllBrowsers={this.onToggleAllBrowsers}
      />
    );
  }
}

AuditFormContainer.propTypes = {
  onAudit: PropTypes.func.isRequired,
};

export default AuditFormContainer;
