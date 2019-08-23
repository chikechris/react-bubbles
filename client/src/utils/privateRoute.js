import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import BubblePage from '../components/BubblePage'

const PrivateRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render = {() => <BubblePage />} />
}


  
  


export default PrivateRoute
