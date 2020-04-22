import React, { useState } from 'react';
import './App.css';
import Person from './Person/person';

const App = props => {
  // returns array with exactly 2 elements  currentState and function to update state
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "David", age: 37 },
      { name: "Haley", age: 30 },
      { name: "Chloe", age: 1 }
    ]
    
  });

  const [otherState, setOtherState] = useState({otherState: 'some other value'});

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Big Daddy Dave", age: 37 },
        { name: "Haley", age: 30 },
        { name: "Chloe", age: 1 }
      ],
      otherState: personsState.otherState
    });
  };

  console.log(personsState, otherState);
  return (
    <div className="App">
      <h1>Hi, I am a react App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person age={personsState.persons[0].age} name={personsState.persons[0].name}> I like beer </Person>
      <Person age={personsState.persons[1].age} name={personsState.persons[1].name}> I like wine </Person>
      <Person age={personsState.persons[2].age} name={personsState.persons[2].name}> I like milk </Person>
    </div>
  );
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'},  'Hi, I\'m a react App!!!'));
}


export default App;

// state = {
//   persons: [
//     { name: "David", age: 37 },
//     { name: "Haley", age: 30 },
//     { name: "Chloe", age: 1 }
//   ]
// }

// switchNameHandler = () => {
//   this.setState({ persons: [
//     { name: "Big Daddy Dave", age: 37 },
//     { name: "Haley", age: 30 },
//     { name: "Chloe", age: 1 }
//   ]});
// }