import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
 
  state = {
    user :[
      {name:'Pankaj Kumar Tiwari', age:24 },
      {name:'pankaj', age:23 },
      {name:'Rakesh Kumar Tiwari', age:22 },
    ],
    otherState:'some other value',
    showPersons:false
  
  }
  userNameUpdate =(event) =>{
    this.setState({userName : event.target.value});
  }

  togglePersonHandler(){
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){
    return (
      <div className="App">  
        <button onClick={this.togglePersonHandler}>Switch name</button>
          {this.state.showPersons ?
            <div>
            <UserOutput userName={this.state.user[0].name} userAge={this.state.user[0].age}/>
            <UserOutput userName={this.state.user[1].name} userAge={this.state.user[1].age}/>
            <UserOutput userName={this.state.user[2].name} userAge={this.state.user[2].age}/>
            <UserInput changed={this.userNameUpdate} currentName={this.state.userName}/> 
            </div> :null}
      </div>
    );
  }
  
}

export default App; 
