import id from "shortid";
import Header from "./Header";
import "./style.css";
import CreateInput  from "./CreateInput";
import Task from "./Task";
import { useCallback, useMemo, useState } from "react";
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

let i = 1;

export const Todo = () => {
  const [list, setList] = useState(data) //3 4 5 6
  const [num, setNum] = useState(1)
  
  console.log('Todo-----',i++ );
  const removeElem = useCallback( (id) => setList(list.filter(elem => elem.id !== id)), [list]);
    
  
  const statusCheckBox = (s, id) => setList((list.map(elem => elem.id == id ? {isActive: s, "id" : id, text : elem.text} : elem)));
  const changeText = (text, id) => setList((list.map(elem => elem.id == id ? {isActive: elem.isActive, "id" : id, 'text' : text} : elem)));
  const addElem = (val) => {
    console.log(list);
    const newList = {
      text: val,
      id: id(),
      isActive: false,
    };
    setList([...list, newList]);
  };
  const memoCreateInp = useMemo(
    ()=><CreateInput l={list.length} addElem={addElem} />,
    [list]
  )
  const memoData = useMemo(
    () => list.map((elem) => (<Task id={elem.id} l={list.length} text={elem.text} isActive={elem.isActive} key={elem.id} changeText={changeText} removeElem={removeElem} statusCheckBox={statusCheckBox}/>))
    ,[list]);
  return (
    <div>
      <Header/>
      <button onClick={() => setNum(num + 1)}>{num}</button>
      {memoCreateInp}
      <div className="contToDo w100 flexColumn"> {memoData}</div>

      
    </div>
  );
};

