import React from 'react';
import classes from './Cockpit.css';
import styled from 'styled-components';
const Button = styled.button`
      background-color:${props => props.alt? 'red':'green'};
      color:white;
      border:1px solid transparent;
      padding:8px 12px;
      cursor:pointer;
      display:block;
      margin:20px auto;
      &:hover{
        background:lightgreen;
        color:black;
      }
    `

const Cockpit = (props) => {
    const assignedClasses = [];
    
    let btnClass = '';
    if(props.showPersons){
      btnClass  = classes.Red;
    }
    if(props.showPersons){
      btnClass = classes.Red;
    }
    if(props.showPersons){
      btnClass = classes.Red;
    }

    return(
        <div className={classes.Cockpit}>
        <h1>I am Learning React form udemy</h1>
        <p className={assignedClasses.join(' ')}>It's need for basic concept of javascript</p>
        <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
};

export default Cockpit;