import React from 'react';
import ReactDOM from 'react-dom';
import PeriodicTable from './PeriodicTable';
import './index.css';

const apiurl = document.body.getAttribute('apiurl');
const main = document.createElement('main');
document.body.appendChild(main);
ReactDOM.render(<PeriodicTable apiurl={apiurl} />, main);