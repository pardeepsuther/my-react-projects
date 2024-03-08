import  { useState } from 'react';
import './App.css';
//import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";*/

function App() {
  
  const [mode, setMode] = useState('light');

 

  const toggleStyle=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      showAlert("Light mode has been enabled","success");
    }else{
    setMode('dark');
    document.body.style.backgroundColor = 'black'; 
    showAlert("Dark mode has been enabled","success");
    }
  }
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  return (
    <div>
    <div className='height-0 margin-0'>
      <Navbar title="MainPage" mode={mode} toggleStyle={toggleStyle} list="Operations"/>
      </div>
      <Alert alert={alert}/>
      
      <div className="container my-10"> 
       <div>
        { /* <Route path="/about" element={<Aboutus/>}/>*/}
        <Textform showAlert={showAlert} mode={mode} /> 
        { /* <div exact path="/"  element={ <Textform showAlert={showAlert} mode={mode} /> }/>*/}
        </div>
        </div>
    </div>

  );
}

export default App;
