import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const container = document.getElementById('root');

// Create the root using the new 'createRoot' API.
const root = ReactDOM.createRoot(container);

// Render your main App component
root.render(
<React.StrictMode>
    <BrowserRouter basename='/dyronn-kitchen'>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);