import React from 'react';
import './UserInput.css';

const UserInput = (props) =>{

    return(
        <input type="text" placeholder="Enter your name" onChange={props.changed} value={props.currentName} />
    )
}
export default UserInput;
