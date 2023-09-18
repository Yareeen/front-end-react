import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Patient from "../src/components/Patient.jsx";
import './index.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
