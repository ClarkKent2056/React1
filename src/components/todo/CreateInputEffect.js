import { memo, useState } from "react";
import { T } from "./TodoEffect";
let i = 1;
 const CreateInputEffect = (props) => {
  console.log('CreateInput-----',i++ );
  const [valAdd, setValAdd] = useState("");
  const click = () => {
    if(valAdd.length < 3) return;
    setValAdd('')
    props.setAction({type : T.ADD, text : valAdd })

  };
  const change = (e) => setValAdd(e.target.value)
  
  return (
    <div className="addTask displayflex">
      <input
        type="text"
        value={valAdd}
        onChange={change}
      />
      <button className="btnAdd" onClick={click}>ADD</button>
    </div>
  );
};

const memoFun = (prevProps, nextProps) => {
  // return false
  // if(prevProps.l === nextProps.l) return true
  // return false  
  // console.log(prevProps);
  // console.log(nextProps);
}

export default memo(CreateInputEffect, memoFun)