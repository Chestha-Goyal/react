import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

    <Navbar/>
    {/* <Navbar title="TextUtils" aboutText="About" />  */}
       {/* ham props pass kr rhe hai
       props are read only  yeah text({props.title}) change ho skta hai bs  
       props are just property isme ham khud components bna kr khud properties dete hai*/}
    {/* <Navbar title="TextUtils"/> */}
    <div className="container my-3">
      <TextForm heading="Enter the text"/>
      {/* <About/> */}
    </div>

    
    </>
  );
}

export default App; 
 