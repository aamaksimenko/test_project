import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

// @ts-expect-error TS(6142): Module './App' was resolved to '/home/dunice/Proje... Remove this comment to see the full error message
import { App } from './App';
import { configureAppStore } from './redux/store';

import './index.css';

// @ts-expect-error TS(2345): Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Provider store={configureAppStore()}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <App />
    </Provider>
  </React.StrictMode>,

);
