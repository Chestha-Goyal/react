// import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  //state variable it tells whether the darkmode is enabled or not 
  const [mode, setMode] = useState('light');
  // state variable dark mode wala
  //  dark hoga to light hoga, light hoga to light hoga
  const toggleMode = () =>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  // setMode = 'light' directly asa nhi kr skte kyuki yeah ik state hai ham statevariable ko directly asa use nhi kr skte
  return (
    <>

    {/* <Navbar/> */}
    {/* <Navbar title="TextUtils" aboutText="About" />  */}
       {/* ham props pass kr rhe hai
       props are read only  yeah text({props.title}) change ho skta hai bs  
       props are just property isme ham khud components bna kr khud properties dete hai*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    {/* toggleMode ik function higa jo navbar me jyga actual me uoer hoga yeah */}
    <div className="container my-3">
      <TextForm heading="Enter the text" mode={mode}/>
      {/* <About/> */}
    </div>

    
    </>
  );
}

export default App; 
 