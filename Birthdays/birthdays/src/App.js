import React, {useState} from 'react'
import './App.css';
import List from './list';
import people from './people';


function App() {
  const [persons, setPersons] = useState(people)

 
  return (
    <div className="App">
     <h4>{persons.length} Birthdays today</h4>
     <List persons={persons}/>
     <button onClick={()=>setPersons([])}>Clear all</button>
    </div>
  );
}

export default App;
