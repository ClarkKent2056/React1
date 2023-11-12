import id from "shortid";
import "./style.css";
import CreateInput  from "./CreateInput";
import Task from "./Task";
import { useCallback, useEffect, useMemo, useState } from "react";
import CreateInputEffect from "./CreateInputEffect";
import TaskEffect from "./TaskEffect";
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

export const T = {
  ADD : 'ADD',
  REMOVE : 'REMOVE',
  CHANGE_TEXT : 'CHANGE_TEXT' ,
  CHANGE_ACTIVE : 'CHANGE_ACTIVE'
}

export const TodoEffect = () => {
  const [list, setList] = useState(data) //3 4 5 6
  const [action, setAction] = useState({})
  useEffect(() => {
    switch(action.type) {
      case T.ADD : addElem(action.text) ; break
      case T.CHANGE_ACTIVE : statusCheckBox(action.s, action.id) ; break
    } 
  
  },[action])

  const removeElem = useCallback( (id) => setList(list.filter(elem => elem.id !== id)), [list]);
  const statusCheckBox = (s, id) => setList((list.map(elem => elem.id == id ? {isActive: s, "id" : id, text : elem.text} : elem)));
  const changeText = (text, id) => setList((list.map(elem => elem.id == id ? {isActive: elem.isActive, "id" : id, 'text' : text} : elem)));

  const addElem = useCallback((val) => {
    const newList = {
      text: val,
      id: id(),
      isActive: false,
    };
    setList([...list, newList]);
  }, [action]);

  const memoCreateInp = useMemo(
    ()=><CreateInputEffect setAction={setAction} />,
    [action]
  )
  const memoData = useMemo(
    () => list.map((elem) => (<TaskEffect id={elem.id} l={list.length} text={elem.text} isActive={elem.isActive} key={elem.id} changeText={changeText} removeElem={removeElem} setAction={setAction}/>))
    ,[list]);

  return (
    <div>
   
      {memoCreateInp}
      <div className="contToDo w100 flexColumn"> {memoData}</div>

      
    </div>
  );
};

