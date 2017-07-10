import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuditForm from '../components/AuditForm';
import audit from '../audit';
import browserVersions from '../browsers/browserVersions';

class AuditFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      browserSelections: {},
      css: '',
    };

    this.onChangeBrowsers = this.onChangeBrowsers.bind(this);
    this.onChangeCss = this.onChangeCss.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeBrowsers(changedBrowserSelections) {
    this.setState({
      browserSelections: {
        ...this.state.browserSelections,
        ...changedBrowserSelections,
      },
    });
  }

  onChangeCss(event) {
    this.setState({ css: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const { onAudit } = this.props;
    const { css, browserSelections } = this.state;

    try {
      const auditSummary = audit(css, browserSelections);

      onAudit(auditSummary);
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    const { browserSelections, css } = this.state;

    return (
      <AuditForm
        browserSelections={browserSelections}
        browserVersions={browserVersions}
        css={css}
        onChangeBrowsers={this.onChangeBrowsers}
        onChangeCss={this.onChangeCss}
        onSubmit={this.onSubmit}
      />
    );
  }
}

AuditFormContainer.propTypes = {
  onAudit: PropTypes.func.isRequired,
};

export default AuditFormContainer;
