import id from "shortid";
import "./style.css";
import { useCallback, useContext, useEffect, useMemo } from "react";
import CreateInputEffect from "./CreateInputEffect";
import TaskEffect from "./TaskEffect";
import { contextToDo } from "../../store/todo.context";
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
  CHANGE_ACTIVE : 'CHANGE_ACTIVE',
}

export const TodoEffect = () => {
  const context = useContext(contextToDo)
  useEffect(() => {
    switch(context.action.type) {
      case T.ADD : addElem(context.action.text) ; break
      case T.CHANGE_ACTIVE : statusCheckBox(context.action.s, context.action.id) ; break
      case T.CHANGE_TEXT : changeText(context.action.text, context.action.id) ; break
      case T.REMOVE : removeElem(context.action.id) ; break
    } 
  
  },[context.action])
  
  const removeElem = useCallback((id) => context.changeList(context.list.filter(elem => elem.id !== id)), [context.list]);
  const statusCheckBox = (s, id) => context.changeList((context.list.map(elem => {
    elem.id == id && (elem.isActive = s);
    return elem
  })));
  const changeText = useCallback((text, id) => context.changeList((context.list.map(elem => {
    if(elem.id == id) {elem.text = text};
    return elem 
  }))), [context.list]);

  const addElem = useCallback((val) => {
    const newList = {
      text: val,
      id: id(),
      isActive: false,
    };
    context.changeList([...context.list, newList]);
  }, [context.action]);

  const memoCreateInp = useMemo(
    () => <CreateInputEffect setAction={context.stAction} />,
    [context.action]
  )

  const memoData = useMemo(
    () => context.list.map((elem, i) => (<TaskEffect i={i} id={elem.id}  text={elem.text} isActive={elem.isActive} key={elem.id}  setAction={context.stAction}/>))
    ,[context.list]);

  return (
    <div>
   
      {memoCreateInp}
      <div className="contToDo w100 flexColumn"> {memoData}</div>

      
    </div>
  );
};




