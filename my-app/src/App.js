import { useState } from 'react';
import './App.css';
import About from './component/About';

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  const [mode, setmode] = useState("Light");
  const [rem, setrem] = useState("EnableDakrMode");
  const [tvar, settvar] = useState("dark")
  const rex=()=>{
    if(mode==='dark'){
      setmode('light');
      settvar('dark')
      setrem('EnableDarkMode');
      document.body.style.backgroundColor='white';
    }
    else{
      setmode('dark');
      settvar('light');
      document.body.style.backgroundColor='#082032';
      setrem('EnableLightMode');
    }
  }
  return (
    <>
   
<Navbar title="ADITYA" ab="ABOUT" mode={mode} rem={rem} tvar={tvar} rex={rex}></Navbar>
<div className="container my-3">
<TextForm heading="enter the text to Analyze Below" mode={mode}/>

</div>
<div className='container my-4'>
    <About/>
  </div> 
    </>
  );
}

export default App;
