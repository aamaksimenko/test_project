import React from 'react';
import { createPortal } from 'react-dom';
import {
  node,
} from 'prop-types';

import './Modal.css';

const modalRoot = document.getElementById('modal-root');

export class ModalWindow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return createPortal(
      <div className="portal">
        <div className="portal__content">
          <div className="content">{children}</div>
        </div>
      </div>,
      this.el,
    );
  }
}

ModalWindow.defaultProps = {
  children: null,
};
ModalWindow.propTypes = {
  children: node,
};
