import React, {Component} from "react";
import {Input} from "@material-ui/core";
import './Person.sass';

class Person extends Component{

    render() {
        return (
            <div className="Person">
                <p onClick={this.props.click}>My name is {this.props.name} </p>
                <Input type="text" onChange={this.props.change} value={this.props.name}/>
            </div>
        );
    }

}

export default Person;