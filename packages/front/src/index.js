import React from 'react';
import ReactDOM from 'react-dom';
import PeriodicTable from './PeriodicTable';
import './index.css';

const main = document.querySelector('#main');
const apiurl = main.getAttribute('apiurl');
ReactDOM.render(<PeriodicTable apiurl={apiurl} />, main);