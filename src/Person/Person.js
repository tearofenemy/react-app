import React, {Component} from "react";
import './Person.sass';

class Person extends Component {
    render() {
        return(
            <div>
                <h1>Hello, my name is {this.props.name}, and i'm {this.props.age} y.o</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Person;