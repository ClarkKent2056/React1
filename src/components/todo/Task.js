import React, { memo } from "react";
import { useState } from "react";
let i = 1;
const Task = (props) => {
  console.log("Task-----", i++);
  // const [status, setStatus] = useState(props.isActive)
  const [inp, setInp] = useState(false);
  const [text, setText] = useState(props.text);

  const removeEl = () => props.removeElem(props.id);
  const checkboxChange = (e) => {
    // setStatus(!status);
    props.statusCheckBox(e.target.checked, props.id);
  };
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
export default memo(Task, memoFnc);
