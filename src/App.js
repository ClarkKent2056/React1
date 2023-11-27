import Contact from "./components/contact/Contact";
import id from "shortid";
import "./App.css";
import { Todo } from "./components/todo/Todo";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Settings from "./components/Settings";
import AboutMe from "./components/aboutMe/AboutMe";
import Header from "./components/Header";
import { TodoEffect } from "./components/todo/TodoEffect";
import { Context, store } from "./store/context";
import { contextToDo, dataToDo } from "./store/todo.context";
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

function App() {
  const [theme, setTheme] = useState(store);
  const [action, setAction] = useState({})
  const [user, setUser] = useState({
    name: "",
  });
  const [list, setList] = useState(dataToDo)
  const changeList = (elem) => setList(elem)
  const stAction = (elem) => setAction(elem)
  const changeThemeBg = (data) => setTheme({ ...theme, bg: data });

  return (
    <div className="App">
      <Context.Provider
        value={{
          theme,
          user,
          change: {
            changeThemeBg,
          },
        }}
      >
        <contextToDo.Provider value={{list, changeList,action, stAction}}>
          <Header />
          {/* <Todo /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/todoEffect" element={<TodoEffect />} />
          </Routes>
        </contextToDo.Provider>
      </Context.Provider>
    </div>
  );
}

export default App;

// const theme=  {
//   color : 'grey',
//   bg : 'grey'
// }
// const  user = {
//   name : 'asdas'
// }

// const all = {...theme, data : 1, ...user}

// console.log(all);
