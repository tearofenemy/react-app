import React from "react";
import './Person.sass';

const person = (props) => {
    return <h1 className="person__name">My name is {props.name}</h1>
}

export default person;