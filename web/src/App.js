import React,{useState} from 'react';
import { useForm } from 'react-hook-form'
import './App.css';
import api from './services/api';

function App() {
  const { register, handleSubmit, errors} = useForm()

  const [error,setError] = useState(false)
  const [signed,setSigned] = useState(false)
  
  async function onSubmit(data){
    try{
      const response = await api.post('/session',data)
    }catch{
    }
  }
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
