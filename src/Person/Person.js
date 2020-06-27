import React, {Component} from "react";
import './Person.sass';

class Person extends Component{

    render() {
        return (
            <div className="Person">
                <p>My name is {this.props.name} </p>
                <input type="text" onChange={this.props.change}/>
            </div>
        );
    }

}

export default Person;