import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuditForm from '../components/AuditForm';
import audit from '../audit';
import browserVersions from '../browsers/browserVersions';

class AuditFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      browserFilter: 'ALL_BROWSERS',
      browserScope: {},
      css: '',
    };

    this.onChangeBrowserVersions = this.onChangeBrowserVersions.bind(this);
    this.onChangeCss = this.onChangeCss.bind(this);
    this.onSelectBrowserFilter = this.onSelectBrowserFilter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onToggleAllBrowserVersions = this.onToggleAllBrowserVersions.bind(this);
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

  onSelectBrowserFilter(event) {
    this.setState({ browserFilter: event.target.value });
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

  onToggleAllBrowserVersions() {
    
  }

  render() {
    const { browserScope, browserFilter, css } = this.state;

    return (
      <AuditForm
        browserFilter={browserFilter}
        browserScope={browserScope}
        browserVersions={browserVersions}
        css={css}
        onChangeBrowserVersions={this.onChangeBrowserVersions}
        onChangeCss={this.onChangeCss}
        onSelectBrowserFilter={this.onSelectBrowserFilter}
        onSubmit={this.onSubmit}
        onToggleAllBrowserVersions={this.onToggleAllBrowserVersions}
      />
    );
  }
}

AuditFormContainer.propTypes = {
  onAudit: PropTypes.func.isRequired,
};

export default AuditFormContainer;
