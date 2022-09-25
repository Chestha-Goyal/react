// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// download both npm install react-router-dom
// npm install react-router-dom@5.2.0
function App() {
  //state variable it tells whether the darkmode is enabled or not 
  const [mode, setMode] = useState('light');
  // state variable dark mode wala
  //  dark hoga to light hoga, light hoga to light hoga

  //alert name ki state 
  const [alert, setAlert] = useState(null); 

  // alert ko set krga
  const showAlert = (message, type) => {
     setAlert({
      msg: message,
      type: type
     })
     setTimeout( () => {
      setAlert(null);
     }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
    // document.title = 'TextUtils - Dark Mode';
    // to attract public title flash
    // setInterval(() => {
    // document.title = 'TextUtils is amazing Mode';
    // }, 2000);
    // setInterval(() => {
    // document.title = 'TextUtils now';
    // }, 1500);
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';

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
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    {/* toggleMode ik function higa jo navbar me jyga actual me uoer hoga yeah */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
       {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* exact likhna pdga eaxct match krne ke liye wrna bho partial match krta hai */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm  showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
          </Route>
          
    </Switch>
      {/* <About/> */}
    </div>
    </Router>
    
    </> 
  );
}

export default App; 
 