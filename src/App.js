
import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
//import About from './components/About';



function App() {
  // State declaration should be inside the functional component
 
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  setTimeout(()=>{
     setAlert(null);
  },1500 );


  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert('Dark mode has been enabled','success');
      document.title ="Textutils -Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert('light  mode has been enabled','success');
      document.title ="Textutils -Light Mode"
    }
  }
  return (
    <>
    
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      <div className="container my-3">
       
          <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
         
        
        {/*<About/>*/}
      </div>
   
    </>
  );
}

export default App;
