import React from 'react';
import './Person.css';
const Person = (props) => {
    return(
        <div className="person">
            <p onClick={props.click}>My Nmae is {props.name} ! </p>
            <p>I am {props.age} years of old ! </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Person;