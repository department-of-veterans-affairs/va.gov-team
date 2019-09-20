import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/App';
import './css/main.css';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe'); // eslint-disable-line global-require
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.querySelector('#root'));
