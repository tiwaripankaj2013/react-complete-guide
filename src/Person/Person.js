import Radium,{StyleRoot} from 'radium';
import React from 'react';
import './Person.css';
const Person = (props) => {
    const style = {
        '@media(min-width:500px)':{
            width:'450px'
        }
    };
    return(
        <div className="person">
            <p onClick={props.click}>My Nmae is {props.name} ! </p>
            <p>I am {props.age} years of old ! </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Radium(Person);