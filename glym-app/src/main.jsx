import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import Preview from './Preview';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Preview />
  </BrowserRouter>
);
