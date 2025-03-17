// index.jsx:
// This is the entry point for rendering the React application.
// Classes and Objects Reference: See CLASSES_AND_OBJECTS.md for its role in bootstrapping the frontend.
/*
--
[Write a JavaScript file that imports React and ReactDOM, then renders the App component into the #root element in index.html. Include inline comments.]
--
<details>
<summary>Explanation</summary>
index.jsx is the standard React entry file which renders the App component into the DOM at the 'root' div.
</details>
*/

// index.jsx:
// The entry point for rendering the React application.

import React from 'react';
import ReactDOM from 'react-dom/client';

// Global Tailwind + other styles
import './index.css';

import App from './App';

// Create the root and render the App
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


