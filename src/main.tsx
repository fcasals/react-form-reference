import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormSample from './Form.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormSample />
  </React.StrictMode>,
)
