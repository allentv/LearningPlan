import React from 'react';
import ReactDOM from "react-dom";

import App from "app/app";
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


// Create a DIV element to load the main react element
var iDiv = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(iDiv);

function loadReactApp() {
  ReactDOM.render(<App />, iDiv);
}

// The below is required to track when the DOM is actually loaded
// and then load the React app
const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  loadReactApp();
} else {
  window.addEventListener('DOMContentLoaded', loadReactApp, false);
}
