import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import flats from './data/flats.js';
import Apartment from './components/apartment.jsx';
import Apartments from './components/apartments.jsx';
import App from './components/app.jsx';

import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App/>, root);
}
