import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss'

import reportWebVitals from './reportWebVitals';
import Layout from './pages/layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

document.title ="Twitter"
root.render(
  <React.StrictMode>

    <Layout/>
  
  </React.StrictMode>
);


reportWebVitals();
