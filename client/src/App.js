import React, { useState } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './components/Login';
import BubblePage from './components/BubblePage';
import PrivateRoute from './utils/PrivateRoute';
import './styles.scss';

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
    <div className='Appp'>
      <header className='App-header'>
        <h2>React Bubble App</h2>
      </header>
      
        
      <Route exact path='/' component={Login} />
      {/*
          Build a PrivateRoute component that will
          display BubblePage when you're authenticated
        */}
      <PrivateRoute path='/bubblepage' component={BubblePage} />
    </div>
    </Router>
  );
}
export default App;
