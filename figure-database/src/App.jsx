import { Fragment, useState, useEffect, useRef } from 'react'
import './style/style.scss'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import { Import } from './component/Import.jsx'
import Main from './component/Main.jsx'
import NavBar from './component/Navbar.jsx'
import FigurePage from './component/FigurePage.jsx'
import UserAuthProvider from './context/UserAuthProvider.jsx'
import LoginPage from './component/LoginPage.jsx'

function App({ data, rating, comment, picture }) {
const [currUser, setCurrUser] = useState(null)  
  
  return (
    <UserAuthProvider value={{currUser, setCurrUser}}>
      <Router>
          <Routes>
            <Route path='/' element={
              <>
                <NavBar data={data} />
                <Main data={data} />
              </>
              } />
            <Route path='/figure/:id' element={
              <>
                <NavBar data={data}></NavBar>
                <FigurePage data={data} />
              </>
              } />
            <Route path='/import' element={<Import data={data} />} />
            <Route path='/login' element={<LoginPage/>}  />
            <Route path='/*' element={<h1> nothing </h1>} />
        </Routes>
      </Router>
    </UserAuthProvider>
  )
}

export default App
