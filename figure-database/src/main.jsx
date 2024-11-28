import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios' 


axios
.get("https://studies.cs.helsinki.fi/restcountries/api/all")
.then((response) => {
  createRoot(document.getElementById('root')).render(
    <App data={response.data} />,
)
})
.catch((err) => {
  alert('failed')
})



