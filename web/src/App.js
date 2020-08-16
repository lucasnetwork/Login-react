import React,{useState} from 'react';
import './App.css';
import Login from './pages/Login';
import Routes from './routes';

function App() {
  const [error,setError] = useState(false)
  const [signed,setSigned] = useState(false)

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
