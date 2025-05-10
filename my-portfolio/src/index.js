import React from 'react';
import ReactDOM from 'react-dom/client';  // Заміна на react-dom/client
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Використання createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
