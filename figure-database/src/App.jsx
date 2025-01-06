import { Fragment, useState, useEffect, useRef } from 'react'
import './style/style.scss'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import { Import } from './component/Import.jsx'
import Main from './component/Main.jsx'
import NavBar from './component/Navbar.jsx'
import FigurePage from './component/FigurePage.jsx'

function App({ data, rating, comment, picture }) {
  return (
    <Router>
      <NavBar data={data}></NavBar>
      <Routes>
        <Route path='/' element={<Main data={data} />} />
        <Route path='/figure/:id' element={<FigurePage data={data} />} />
        <Route path='/import' element={<Import data={data} />} />
        <Route path='/*' element={<h1> nothing </h1>} />
      </Routes>
    </Router>
  )
}

export default App
