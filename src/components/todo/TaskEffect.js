import React, { memo } from "react";
import { useState } from "react";
import { T } from './TodoEffect'
const TaskEffect = (props) => {
  // const [status, setStatus] = useState(props.isActive)
  const [inp, setInp] = useState(false);
  const [text, setText] = useState(props.text);

  const removeEl = () => props.removeElem(props.id);
  const checkboxChange = (e) => props.setAction({s : e.target.checked, id : props.id, type : T.CHANGE_ACTIVE})
  
  const saveText = () => {
    setInp(!inp);
    if (text.lenght < 3) return;
    props.changeText(text, props.id);
  };

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
  return false
  if (prevProps.l !== nextProps.l) return false;
  if (prevProps.isActive === nextProps.isActive) return true;

  // console.log(prevProps.isActive,nextProps.isActive);
};
export default memo(TaskEffect, memoFnc);
