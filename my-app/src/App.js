import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  const [mode, setmode] = useState("Light");
  const [rem, setrem] = useState("EnableDakrMode");
  const [tvar, settvar] = useState("dark");
  const [alert, setalert] = useState(null);
  const alt=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);

  }
  const rex=()=>{
    if(mode==='dark'){
      setmode('light');
      settvar('dark');
      setrem('EnableDarkMode');
      document.body.style.backgroundColor='white';
      alt("light  MODE HAVE BEEN ENABLEED",'primary');
    }
    else{
      setmode('dark');
      settvar('light');
      document.body.style.backgroundColor='#082032';
      setrem('EnableLightMode');
      
      alt("dark mODE HAVE BEEN ENABLEED",'success');
    }
  }
  return (
    <>
   
<Navbar title="ADITYA" ab="ABOUT" mode={mode} rem={rem} tvar={tvar} rex={rex}></Navbar>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm alt={alt} heading="enter the text to Analyze Below" mode={mode}/>

</div>
<div className='container my-4'>
    <About/>
  </div> 
    </>
  );
}

export default App;
