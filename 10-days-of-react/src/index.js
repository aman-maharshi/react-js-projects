import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

setInterval(function() {
  ReactDOM.render(<App />, document.querySelector('#root'));
}, 1000)

