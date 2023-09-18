import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {

  return (
    
    <div className='App'> 
  
      <Navbar> </Navbar>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}> </Route>
          <Route exact path="/patient/:patientId" component={Patient}>  </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
