import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  
  document.getElementById('root')
);


