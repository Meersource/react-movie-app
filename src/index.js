import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from "./auth"
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <Auth/> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


