
import Contact from './components/contact/Contact';
import './App.css';
import { Todo } from './components/todo/Todo';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home'
import Settings from './components/Settings'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import { TodoEffect } from './components/todo/TodoEffect'
// import Contact from './component/'


const data = [
  {
    name : 'Alex',
    phone : '098 123 34 54',
    data : ['own', 'bod','fff','aqw', 'jhhjj'],
  },
  {
    name : 'Robert',
    phone : '098 123 34 74',
    data : ['own', 'aqw'],
  },
  {
    name : 'Name',
    phone : '098 613 34 54',
    data : ['own','fff','aqw'],
  },
  {
    name : 'UO',
    phone : '098 823 34 54',
    data : ['own', 'bod','green'],
  },
]
// const contacts = data.map( contact => <Contact name={contact.name} key={contact.phone} phone={contact.phone} data={contact.data} />)
{/* {contacts} */}

function App() {
  return (
    <div className="App">
      <Header /> 
      {/* <Todo /> */}
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/todo" element={<Todo />} />
          <Route  path="/settings" element={<Settings />} />
          <Route  path="/aboutMe" element={<AboutMe />} />
          <Route  path="/todoEffect" element={<TodoEffect />} />
      </Routes>
    </div>
  );
}


export default App;
