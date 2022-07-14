import React from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

const modalRoot = document.getElementById('modal-root');

type Props = {};

export class ModalWindow extends React.PureComponent<Props> {
  el: any;

  constructor(props: Props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    modalRoot.removeChild(this.el);
  }

  render() {
    // @ts-expect-error TS(2339): Property 'children' does not exist on type 'Readon... Remove this comment to see the full error message
    const { children } = this.props;
    return createPortal(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="portal">
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="portal__content">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="content">{children}</div>
        </div>
      </div>,
      this.el,
    );
  }
}
