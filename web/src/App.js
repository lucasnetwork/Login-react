import React from 'react';
import { useForm } from 'react-hook-form'
import './App.css';

function App() {

const { register, handleSubmit, errors} = useForm()
  function onSubmit(data){
    console.log(data)
  }
  return (
    <div className="App">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div >
            <input name="user" ref={register({required:true})} required/>
            <label>User</label>
          </div>
          <div>
            <input name="password" type="password" ref={register({required:true})} required/>
            <label>Password</label>
          </div>
          
          {/* {errors.exampleRequire && <span>This field is required</span>} */}

          <input type="submit"/>
        </form>
      </div>
    </div>
  );
}

export default App;
