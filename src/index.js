import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './App';
import configureAppStore from './redux/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureAppStore()}>
    <App />
  </Provider>,
);
