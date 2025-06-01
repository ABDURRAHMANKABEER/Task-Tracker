import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { useSelector } from 'react-redux';

function App() {

  const tasks = useSelector(state => state.tasks);

  useEffect(()=> {

    console.log("Updated tasks:", tasks);

  }, [tasks]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
