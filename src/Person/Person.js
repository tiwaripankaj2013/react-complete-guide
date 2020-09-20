import React from 'react';

const Person = (props) => {
    return(
        <div>
            <p>My Nmae is {props.name} ! </p>
            <p>I am {props.age} years of old ! </p>

        </div>
    )
};

export default Person;