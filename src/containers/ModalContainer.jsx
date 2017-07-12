import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from '../components/Modal';

class ModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };

    this.onClickOverlay = this.onClickOverlay.bind(this);
  }

  onClickOverlay() {
    this.setState({ show: false });
  }

  render() {
    const { content } = this.props;
    const { show } = this.state;

    return (
      <Modal
        content={content}
        onClickOverlay={this.onClickOverlay}
        show={show}
      />
    );
  }
}

ModalContainer.propTypes = {
  content: PropTypes.node,
};

ModalContainer.defaultProps = {
  content: null,
};

export default ModalContainer;
