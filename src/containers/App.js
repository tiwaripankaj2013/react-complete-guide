import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Radium from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
 
  state = {
    persons :[
      {id:'A01',name:'Pankaj Kumar Tiwari', age:24 },
      {id:'A02',name:'pankaj', age:23 },
      {id:'A03',name:'Rakesh Kumar Tiwari', age:22 },
    ],
    otherState:'some other value',
    showPersons:false
  
  }
  nameChangedHandler = (event,id) => { 
    const personIndex =  this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons:persons});
  }
  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){
    let persons = null;
    if(this.state.showPersons){
      persons = (
            <Persons persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
      );
    }
    return (
      <div className="App">  
        <Cockpit showPersons={this.state.showPersons}
        persons={this.state.persons} clicked={this.togglePersonsHandler} />
       {persons}
      </div>
    );
  }
}

export default Radium(App); 