import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { init as initApm } from '@elastic/apm-rum';

initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'CRA',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl:
    'https://97a885be442f446c8b446b64444fb9f4.apm.eastus2.azure.elastic-cloud.com:443',

  // Set service version (required for sourcemap feature)
  serviceVersion: ''
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
