import { useState } from "react";
export const CreateInput = (props) => {
  const [valAdd, setValAdd] = useState("");
  const click = () => {
    if(valAdd.length < 3) return;
    setValAdd('')
    props.addElem(valAdd)

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
