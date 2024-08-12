import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Toaster } from 'react-hot-toast';
import {Provider} from 'react-redux'
import {HelmetProvider} from 'react-helmet-async'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider context={App}>
    <Router>
    <HelmetProvider > 
    <App />
    </HelmetProvider>
    </Router>
    <Toaster />
    </HelmetProvider>
  </React.StrictMode>
);
