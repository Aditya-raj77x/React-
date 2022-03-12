import './App.css';

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
   
<Navbar title="ADITYA" ab="ABOUT"></Navbar>
<div className="container my-3">
<TextForm heading="enter the text to Analyze Below"/>
</div> 
    </>
  );
}

export default App;
