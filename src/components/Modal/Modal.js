import React, { Component } from 'react';
import './Modal.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'keydown',
      this.handleKeyDown,
    );
  }

  handleKeyDown = e => {

    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackfropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div
        className="Modal__backdrop"
        onClick={this.handleBackfropClick}
      >
        <div className="Modal__content">
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    );
  }
}
