
import Contact from './components/contact/Contact';
import './App.css';
import { Todo } from './components/todo/Todo';

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
      <Todo />
    </div>
  );
}

export default App;
