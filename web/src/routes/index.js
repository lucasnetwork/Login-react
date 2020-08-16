import React from 'react'
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute/privateRoute'

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <PrivateRoute exact path="/home"/>
        </Switch>
    </BrowserRouter>
)

export default Routes