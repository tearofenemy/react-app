import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';
import {Input} from "@material-ui/core";
import './Person.sass';

class Person extends Component{

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                <p onClick={this.props.click}>My name is {this.props.name} </p>
                <p>{this.props.children}</p>
                <Input
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name}/>
            </Fragment>
        );
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    change: PropTypes.func,
};

export default Person;