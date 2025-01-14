import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'
import { Import } from './component/Import.jsx'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import server from './axios/server.js'

server
  .get('figures')
  .then((response) => {
    createRoot(document.getElementById('root')).render(<App data={response.data} />)
  })
  .catch((err) => {
    alert('failed')
  })
