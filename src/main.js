import React from 'react';
import ReactDOM from "react-dom";
import Greeting from "greeting";

function run() {
  ReactDOM.render(
    <Greeting name="World" />,
    document.getElementById("root")
  );
}


// The below is required to track when the DOM is actually loaded
const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
