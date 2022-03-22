import React from 'react'

export default function Alert(props) {
    const capword=(wo)=>{
       const lm=wo.toLowerCase();
       return lm.charAt(0).toUpparCase() + lm.slice(1);
    }
  return (
    props.alert &&<div>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.msg}</strong>
            
        </div>
    </div>
  )
}
