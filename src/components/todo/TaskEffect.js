import React, { memo, useCallback } from "react";
import { useState } from "react";
import { T } from './TodoEffect'
const TaskEffect = (props) => {
  
  const [inp, setInp] = useState(false);
  const [text, setText] = useState(props.text);
  console.log(`Task ${props.i}`)
  const removeEl = () => props.setAction({id : props.id, type : T.REMOVE});
  const checkboxChange = (e) => props.setAction({s : e.target.checked, id : props.id, type : T.CHANGE_ACTIVE})
  
  const saveText = useCallback(() => {
    
    setInp(!inp);
    if (text.lenght < 3) return;
    props.setAction({"text" : text, id : props.id, type : T.CHANGE_TEXT});
  },[text, inp])

  return (
    <div className={`displayflex task ${props.isActive ? "green" : "blue"}`}>
      <input
        type="checkbox"
        checked={props.isActive}
        onChange={checkboxChange}
      />
      {inp ? (
        <input
          type="text"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={saveText}
        />
      ) : (
        <h4 onDoubleClick={() => setInp(!inp)}>{props.text}</h4>
      )}
      <button onClick={removeEl}>X</button>
    </div>
  );
};
const memoFnc = (prevProps, nextProps) => {
  
  return (prevProps.text == nextProps.text && prevProps.isActive == nextProps.isActive)
};
export default memo(TaskEffect, memoFnc);
