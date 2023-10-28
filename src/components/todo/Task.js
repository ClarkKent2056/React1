import React from 'react'
import { useState } from "react";
export const Task = (props) => {
  const [status, setStatus] = useState(props.isActive)
  const [inp, setInp] = useState(false)
  const [text, setText] = useState(props.text);

  
  const removeEl = () => props.removeElem(props.id)
  const checkboxChange = () =>{
    setStatus(!status);
    props.statusCheckBox(status, props.id)
    
  }
  const saveText = () =>{
     setInp(!inp);
     if(text.lenght < 3) return
     props.changeText(text, props.id);
  }
  
  return (
    <div className={`displayflex task ${status ? 'green' : 'blue'}`} >
        <input type='checkbox' checked={status} onChange={checkboxChange}/>
        {inp ? <input type='text' autoFocus value={text} onChange={(e)=> setText(e.target.value)} onBlur={saveText} /> :<h4 onDoubleClick={()=> setInp(!inp)}>{props.text}</h4>}
        <button onClick={removeEl}>X</button>
    </div>
  )
}
