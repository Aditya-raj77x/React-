import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const upclick= ()=>{
    console.log("up was c;icked"+txt);
    let newtxt=txt.toUpperCase();
    setText(newtxt);
  }
  const dp=()=>{
    let a=txt.toLowerCase();
    setText(a);
  }
  const hc= (event)=>{
    console.log("get the input ");
    setText(event.target.value);
  }
  const sp=()=>{
    setText("");
  }
  const [txt, setText] = useState('ENTER text Here');
  return (
    <>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" id="myinput" rows="8" value={txt} onChange={hc}></textarea>
        <button className='btn btn-primary mx-1' onClick={upclick}>Convert to UpparCase</button>
        <button className='btn btn-danger mx-1' onClick={dp}>CONVERT TO LOWERCASE</button>
        <button className='btn btn-success mx-1' onClick={sp}>CLEAR</button>
    </div>
    <div className='container'>
        <h1> THIS IS YOUR TEXT SUMMARY</h1>
        <p> Number of Words: {txt.length}  </p>
        <p>Number of Letters:{txt.split(" ").length}</p>
        <p>{0.008 * txt.split(" ").length} Minutes To Read</p>
        <h2>PREVIEW</h2>
        {txt}
      </div>
    </>
  )
}
TextForm.defaultProps = {
  heading: 'ENTER TITLE HERE'
};
