import React from 'react';
import ReactDOM from 'react-dom';
const heading = React.createElement('div', { id: 'parent' }, [
  React.createElement('h1', {}, 'Hello World from React'),
  React.createElement('h2', {}, 'Hello World'),
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Hello World from React'),
    React.createElement('h2', {}, 'Hello World'),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
