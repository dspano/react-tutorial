import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  state = {
    persons: [
      { name: "David", age: 37 },
      { name: "Haley", age: 30 },
      { name: "Chloe", age: 1 }
    ]
  }

  switchNameHandler = (newName1, newName2, newName3) => {
    this.setState({ persons: [
      { name: newName1, age: 37 },
      { name: newName2, age: 30 },
      { name: newName3, age: 2 }
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <button onClick={ () =>  this.switchNameHandler("Big Dady Dave", "Big Mommy Haley", "ChloeBean") }>Switch Name</button>
        <Person
          age={this.state.persons[0].age}
          name={this.state.persons[0].name}
          > I like beer 
        </Person>
        <Person 
          age={this.state.persons[1].age}
          name={this.state.persons[1].name}
          click={this.switchNameHandler.bind(this, "David", "Big Mommy Haley", "Chloe")}
          > I like wine 
        </Person>
        <Person 
          age={this.state.persons[2].age}
          name={this.state.persons[2].name}
          > I like milk
        </Person>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'},  'Hi, I\'m a react App!!!'));
  }
}

export default App;
