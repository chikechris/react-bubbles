import React, { useState } from 'react'

import { Link, Route } from 'react-router-dom'

import Login from './components/Login'
import BubblePage from './components/BubblePage'
import PrivateRoute from './utils/PrivateRoute'
import './styles.scss'

function App () {
  const [colorList, setColorList] = useState([])
  return (
    <div className='App'>
      <div className='navigation'>
        <Link to='/'>Login</Link>
        <br />
        <Link to='/bubblepage'>Bubble Page</Link>
      </div>
      <Route exact path='/' component={Login} />
      {/*
          Build a PrivateRoute component that will
          display BubblePage when you're authenticated
        */}
      <PrivateRoute path='/bubblepage' component={BubblePage} />
    </div>
  )
}
export default App
