import { Fragment, useState, useEffect, useRef } from 'react'
import './App.css'
import { InputBar } from './component/SearchBar.jsx'
import { DropDown } from './component/DropDown.jsx'
import { PopUp } from './component/PopUp.jsx'
import { Import } from './component/Import.jsx';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import NavBar from './component/Navbar.jsx'


function App({data}) {
  return (
     <Router>
      <NavBar data={data}></NavBar>
      <Routes >
        <Route path='/' element={ <h1> FUTURE CONTENTS </h1> } />  
        <Route path='/import' element={ <Import data={data} /> } />
        <Route path='/*' element={ <h1> nothing </h1> } />
      </Routes>
     </Router> 
  )
}

export default App
