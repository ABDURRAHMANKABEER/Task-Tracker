import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <>
      <Router>
        <h1 className='display-3'>Task Tracker</h1>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
