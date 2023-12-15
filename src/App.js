import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState}from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";





function App() {
  const [mode,setMode]=useState('light'); //whether dark mode is enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },800);
  }

  const  toggleMode=()=>{
    if(mode === 'light'){
   setMode('dark')
   document.body.style.backgroundColor='#222222'
   showAlert("dark mode enabled","success");
  
    }
   else{
   setMode('light');
   document.body.style.backgroundColor='white'
   showAlert("light mode enabled","success");
 
   }
  }
  return (
         <>
    <Router>
    
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    
    <Routes>
    
          
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<TextForm heading="Enter text below" mode={mode}/>}></Route>
          
          </Routes>
          
    </div>
    </Router>
    
    </>
  );
}

export default App;
