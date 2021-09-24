import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import rg4js from 'raygun4js'; // Import the library with this syntaxhis syntax

rg4js('enableCrashReporting', true);
rg4js('apiKey', 'wwCNBSKAOzK8hTV2Rafn3g');
rg4js('enablePulse', true);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
