import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDr85y-vEGsVwl93kwcDCxFTIiKv3p72os';

// Create a new component. This component should produce
// some HTML

const App = () => <div>Hi!</div>;

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
