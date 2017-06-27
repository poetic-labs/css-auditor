import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuditForm from '../components/AuditForm';
import audit from '../audit';

class AuditFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      css: '',
    };

    this.onChangeCss = this.onChangeCss.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeCss(event) {
    this.setState({ css: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const { onAudit } = this.props;

    try {
      const auditSummary = audit(this.state.css);

      onAudit(auditSummary);
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    const { css } = this.state;

    return (
      <AuditForm
        css={css}
        onChangeCss={this.onChangeCss}
        onSubmit={this.onSubmit}
      />
    );
  }
}

AuditFormContainer.propTypes = {
  onAudit: PropTypes.func,
};

AuditFormContainer.defaultProps = {
  onAudit: () => {},
};

export default AuditFormContainer;
