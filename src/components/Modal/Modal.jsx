import React from 'react';
import { createPortal } from 'react-dom';
import {
  bool,
  node,
} from 'prop-types';

import './Modal.css';

function Modal({ isOpen, message }) {
  if (!isOpen) return null;
  return createPortal(
    <div className="portal">
      <div className="portal__content">
        <div className="content">{message}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.defaultProps = {
  isOpen: false,
  message: null,
};
Modal.propTypes = {
  isOpen: bool,
  message: node,
};
export default Modal;
