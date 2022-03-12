import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const upclick= ()=>{
    console.log("up was c;icked"+txt);
    let newtxt=txt.toUpperCase();
    setText(newtxt);
  }
  const hc= (event)=>{
    console.log("get the input ");
    setText(event.target.value);
  }
  const [txt, setText] = useState('ENTER text Here');
  return (
    <>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" id="myinput" rows="8" value={txt} onChange={hc}></textarea>
        <button className='btn btn-primary' onClick={upclick}>Convert to UpparCase</button>

    </div>
    </>
  )
}
TextForm.defaultProps = {
  heading: 'ENTER TITLE HERE'
};
