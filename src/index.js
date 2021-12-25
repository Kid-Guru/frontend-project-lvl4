// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './containers/Root';
import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import '../assets/application.scss';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('chat')
);
