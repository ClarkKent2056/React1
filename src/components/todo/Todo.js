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
const LS = {
  save: (dat) => localStorage.setItem("elemToDo", JSON.stringify(dat)),
  get: () => JSON.parse(localStorage.getItem("elemToDo")),
};

export const Todo = () => {
  const [list, setList] = useState(data);

  const removeElem = (id) => {
    setList(list.filter(elem => elem.id !== id));
    // LS.save(list);
  }
  const statusCheckBox = (s, id) => {
    setList((list.map(elem => elem.id == id ? {isActive: s, "id" : id, text : elem.text} : elem
    )));
    // LS.save(list)
  }
  const changeText = (text, id) =>{
    setList((list.map(elem => elem.id == id ? {isActive: elem.isActive, "id" : id, 'text' : text} : elem
    )));
    // LS.save(list)

  }
  const addElem = (val) => {
    
    const newList = {
      text: val,
      id: id(),
      isActive: false,
    };

    setList([...list, newList]);
    // LS.save(list)
  };
  const memoData = list.map((elem) => (<Task id={elem.id} text={elem.text} isActive={elem.isActive} key={elem.id} changeText={changeText} removeElem={removeElem} statusCheckBox={statusCheckBox}/>));
  return (
    <div className="w100">
      <CreateInput addElem={addElem} />
      <div className="contToDo w100 flexColumn"> {memoData}</div>

      
    </div>
  );
};
// (()=>{
//   const lsDat = LS.get();
//   if(lsDat !== null){
//     data.forEach((elem, i)=>{
//      i > lsDat.length - 1 && data.push({})
//      elem.text = lsDat[i].text;
//      elem.id = lsDat[i].id;
//      elem.isActive = lsDat[i].isActive
//     })
//   }
 
// })()
