import Person from "./Person/Person";
import React, {PureComponent} from "react";

class Persons extends PureComponent{

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }*/

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                        name={person.name}
                        age={person.age}
                        click={() => this.props.deleted(index)}
                        key={index}
                        change={event => this.props.changed(event, person.id)}
            />});
    }
};

export default Persons;
