import React from 'react';

// Create a new component. This component should produce some html 
const App = function() {
  return <div>Hi!</div>;
}

console.log(App);

// Take this component's generated HTML and put it on the page (in the DOM)
React.render(App);