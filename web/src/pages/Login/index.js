import React from 'react'
import { useForm } from 'react-hook-form'

import api from '../../services/api';

import './styles.css'

const Login = () =>{
    const { register, handleSubmit, errors} = useForm()
    
    async function onSubmit(data){
        try{
          const response = await api.post('/session',data)
        }catch{
        }
      }

    return (
        <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div >
            <input name="email" ref={register({required:true})} required/>
            <label>User</label>
          </div>
          <div>
            <input name="password" type="password" ref={register({required:true, min:8})} required/>
            <label>Password</label>
          </div>
          <input type="submit"/>
        </form>
      </div>
    )
}

export default Login