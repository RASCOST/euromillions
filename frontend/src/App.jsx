import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header'
import Nav from './components/Nav'
import Container from './components/Container'
import Footer from './components/Footer'

export default props => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Nav />
        <Container />
        <Footer />
      </Router>
    </div>
  )
}
