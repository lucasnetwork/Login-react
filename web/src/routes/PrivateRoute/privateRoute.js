import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({...rest}) =>{
    return (
        <Route {...rest} render={() => {
            const token = localStorage.getItem('tokenPayload')
            return (token ? <h1>logado</h1> : <Redirect to="/"/>)
        }}/>
    )
}

export default PrivateRoute