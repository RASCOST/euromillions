import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import './assets/styles/styles.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDom.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root')
)
