import React, { Component } from 'react';
import App from '../components/App';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auditSummary: {},
    };

    this.onAudit = this.onAudit.bind(this);
  }

  onAudit(auditSummary) {
    this.setState({ auditSummary });
  }

  render() {
    return (
      <App
        {...this.state.auditSummary}
        onAudit={this.onAudit}
      />
    );
  }
}

export default AppContainer;
