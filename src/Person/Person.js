import React, {Component} from "react";
import './Person.sass';

class Person extends Component {
    render() {
        return(
            <div>
                <p onClick={this.props.click}>Hello, my name is {this.props.name}, and i'm {this.props.age} y.o</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change}/>
            </div>
        )
    }
}

/*const Person = props => {
    return(
        <div>
            <h1>Hello, my name is {props.name}, and i'm {props.age} y.o</h1>
            <p>{props.children}</p>
        </div>
    );
}*/

export default Person;