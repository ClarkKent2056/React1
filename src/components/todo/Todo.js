import id from "shortid";

import "./style.css";
import { CreateInput } from "./CreateInput";
import { Task } from "./Task";
import { useState } from "react";
const data = [
  {
    text: "some text",
    id: id(),
    isActive: false,
  },
  {
    text: "new home",
    id: id(),
    isActive: true,
  },
];

export const Todo = () => {
  const [list, setList] = useState(data);

  const removeElem = (id) => setList( data.filter(elem => elem.id !== id))
  
  const addElem = (val) => {
    const newList = {
      text: val,
      id: id(),
      isActive: false,
    };

    setList([...list, newList]);
  };
  const memoData = list.map((elem) => (
    <Task id={elem.id} text={elem.text} isActive={elem.isActive} key={elem.id} removeElem={removeElem}/>
  ));
  return (
    <div>
      <CreateInput addElem={addElem} />
      {memoData}

      {2 > 1 ? <p>sadas</p> : <button>casa</button>}
    </div>
  );
};
