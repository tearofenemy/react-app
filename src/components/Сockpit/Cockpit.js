import React, {useEffect} from "react";
import {Button} from "@material-ui/core";
import './Cockpit.sass';

function Cockpit(props) {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Save data to cloud');
        }, 1000)
    }, []);

    let btn_color = 'primary';

    const classes = [];

    if(props.showPersons) {
        btn_color = 'secondary';
    }

    if(props.persons.length <= 2) {
        classes.push('red');
    }
    if(props.persons.length <= 1) {
        classes.push('bold');
    }

    return(
        <div>
            <p className={classes.join(' ')}>{props.title}</p>
            <Button variant="contained" color={btn_color} onClick={props.click}>Show Persons</Button>
        </div>
    );
};

export default Cockpit;