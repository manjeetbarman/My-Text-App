import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);

  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable succesfully !!", "success" );
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable succesfully !!", "success" );

    }

  }
  return (
    <> 
    <Navbar title="My Text App" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div classname="container my-3">
    <TextForm showAlert={showAlert} heading="Enter your text to analyse"/>
  
    </div>
    </>
    
  );
}

export default App;
