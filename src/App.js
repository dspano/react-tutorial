import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  state = {
    persons: [
      { id: 'dav1', name: "David", age: 37 },
      { id: 'hal2', name: "Haley", age: 30 },
      { id: 'chl3', name: "Chloe", age: 1 }
    ],
    showPersons: false
  }

  deletePersonHandler = (idx) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(idx, 1);
    this.setState({persons, persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    /**
     *  two ways to fetch the person object 
     */
    // const person = Object.assign({}, this.state.persons[personIndex])
    const person = {
      ...this.state.persons[personIndex]
    }
    
    person.name = event.target.value; // now that we have the person set the name
    const persons = [...this.state.persons]; // grab copy of the persons array
    persons[personIndex] = person;  // update person in copy of person array
    
    this.setState( { persons: persons } );  // setState with newly modified persons array
  }

  togglePersonsHandler = () => {
    this.setState(
      {showPersons: !this.state.showPersons}
    )
  }
 
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          { this.state.persons.map((person, index) => {
            return (<Person
              click={() => this.deletePersonHandler(index)}
              age={person.age}
              name={person.name}
              key={person.id}
              changed={ (event) => this.nameChangedHandler(event, person.id)}/>
            )
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <button 
          style= {style}
          onClick={ this.togglePersonsHandler }>Toggle Persons </button>
        { persons }
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'},  'Hi, I\'m a react App!!!'));
  }
}

export default App;
