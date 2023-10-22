import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import './App.css';

// import Contact from './component/'


const data = [
  {
    name : 'Alex',
    phone : '098 123 34 54',
    data : ['own', 'bod','fff','aqw'],
  },
  {
    name : 'Robert',
    phone : '098 123 34 74'
  },
  {
    name : 'Name',
    phone : '098 613 34 54'
  },
  {
    name : 'UO',
    phone : '098 823 34 54'
  },
]

function App() {
  // const user = {
  //   name : 'alex',
  //   age : 12,

  // }
  const contacts = data.map( contact => <Contact name={contact.name} key={contact.phone} phone={contact.phone} />)
  return (
    <div className="App">
      {contacts}
      {/* <Contact name={data[0].name} phone={data[0].phone} /> */}
    </div>
  );
}

export default App;
