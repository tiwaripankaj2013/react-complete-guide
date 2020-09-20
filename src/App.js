import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' ;


class App extends Component {
  state = {
    persons :[
      {name:'Pankaj',age:23},
      {name:'Rakesh Kumar Singh',age:25},
      {name:'Sidharth kumar',age:27},
    ]
  }
  switchName = (newName) => {
    this.setState({
      persons:[
        {name:'Soni kakar', age:18},
        {name:'Nehal', age:8},
        {name:'Madhu', age:28}
      ]
    })
  }

  nmaeChangeHandler = (event) =>{
    this.setState({
      persons:[
        {name:'sgar',age:30},
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.switchName()}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.nmaeChangeHandler} click={this.nmaeChangeHandler.bind(this,'Simran')}/>
        </header>
      </div>
    );
  }
  
}

export default App;
