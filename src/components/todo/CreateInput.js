import { useState } from "react";
export const CreateInput = (props) => {
  const [valAdd, setValAdd] = useState("");
  const click = () => {
    setValAdd('')
    props.addElem(valAdd)

  };
  const change = (e) => setValAdd(e.target.value)
  
  return (
    <div className="addTask">
      <input
        type="text"
        value={valAdd}
        onChange={change}
      />
      <button onClick={click}>ADD</button>
    </div>
  );
};
