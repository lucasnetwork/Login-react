import React,{useState} from 'react';
import './App.css';
import Login from './pages/Login';

function App() {
  const [error,setError] = useState(false)
  const [signed,setSigned] = useState(false)
  
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
