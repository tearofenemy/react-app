import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';
import AuthContext from "../../../context/auth-context";
import {Input} from "@material-ui/core";
import './Person.sass';

class Person extends Component{
    constructor(props) {
        super(props);
        this.inputElemRef = React.createRef();
    }

    componentDidMount() {
        this.inputElemRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className="Person">
                <AuthContext.Consumer>
                    {(context) => context.isAuth ? <p>Is logged!</p> : <p>Guest</p> }
                </AuthContext.Consumer>
                    <p onClick={this.props.click}>My name is {this.props.name} </p>
                    <p>{this.props.children}</p>
                    <Input
                        type="text"
                        ref={this.inputElemRef}
                        onChange={this.props.change}
                        value={this.props.name}
                    />
            </div>
        );
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    change: PropTypes.func
};

export default Person;