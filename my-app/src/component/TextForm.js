import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const upclick= ()=>{
    console.log("up was c;icked"+txt);
    let newtxt=txt.toUpperCase();
    setText(newtxt);
    props.alt("CONVERTED TO UPPARCASE","warning")
  }
  const cop=()=>{
    let cc=document.getElementById("myinput");
    cc.select();
    navigator.clipboard.writeText(cc.value);
    props.alt("you copyed the text","danger")

  }
  const dp=()=>{
    let a=txt.toLowerCase();
    setText(a);
    props.alt("CONVERTED TO LOWERCASE","warning")
  }
  const hc= (event)=>{
    console.log("get the input ");
    setText(event.target.value);
  }
  const sp=()=>{
    setText("");
    props.alt("CLEARED TO TEXT BOX","primary")
  }
  const [txt, setText] = useState(' ');
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#082032'}}>  
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#082032':'white',color:props.mode==='dark'?'white':'#082032'}} id="myinput" rows="8" value={txt} onChange={hc}></textarea>
        <button className='btn btn-primary mx-1' onClick={upclick}>Convert to UpparCase</button>
        <button className='btn btn-danger mx-1' onClick={dp}>CONVERT TO LOWERCASE</button>
        <button className='btn btn-success mx-1' onClick={sp}>CLEAR</button>
        <button className='btn btn-warning mx-1' onClick={cop}>COPY TEXT</button>
    </div>
    <div className='container'>
        <h2> THIS IS YOUR TEXT SUMMARY</h2>
        <p> Number of Letters: {txt.trim().length}  </p>
        <p>Number of Words:{txt.length>0 ? txt.trim().split(" ").length : 0}</p>
        <p>{0.008 * txt.split(" ").length} Minutes To Read</p>
        <h2>PREVIEW</h2>
        <p>{txt.length>0?txt:"Enter Something To priview on the text box above "}</p>
      </div>
      </div>
    </>
  )
}
TextForm.defaultProps = {
  heading: 'ENTER TITLE HERE'
};
