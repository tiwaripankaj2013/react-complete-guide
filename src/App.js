import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    // const person = Object.assign({},this.state.persons[personIndex]);
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
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      margin:'10px auto',
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person,index) =>{
              return <Person 
              click={()=>this.deletePersonHandler(index)}
              name={person.name} age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event,person.id)}/>
            })}
          </div>
      );
    }
    return (
  
    <div className="App">  
      <h1>I am Learning React form udemy</h1>
      <p>It's need for basic concept of javascript</p>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
         {persons}
      </div>
    );
  }
}

export default App; 