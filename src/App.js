import React, {Component} from 'react';
import './style.sass';
import './App.css';
import Person from "./Person/Person";


// const App = props => {
//
//     const [personsState, setPersonsState] = useState({
//         persons: [
//             {name: 'Max', age: 19},
//             {name: 'Jane', age: 20},
//             {name: 'Kate', age: 36}
//         ]
//     });
//
//     const switchNameHandler = () => {
//         setPersonsState({
//            persons: [
//                {name: 'Maximus', age: 19},
//                {name: 'Jany', age: 20},
//                {name: 'Mike', age: 36}
//            ]
//         });
//     }
//
//     return (
//         <div className="App">
//             <h1>Hello, I'm first React App</h1>
//             <button onClick={switchNameHandler}>Сlick Me</button>
//             <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//             <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//             <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//         </div>
//     );
//
// };
class App extends Component {

    state = {
        persons: [
            {id: 'some_str1', name: 'Max', age: 19},
            {id: 'some_str2', name: 'Jane', age: 18},
            {id: 'some_str3', name: 'Janny', age: 21}
        ],
        showPersons: false
    };

    deletePersonHandler = personIndex => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    changeNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(el => {
            return el.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }

    showPersonsHandler = () => {
        const togglePersons = this.state.showPersons;
        this.setState({showPersons: !togglePersons});
    }

    render() {
        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}
                                key={index}
                                change={e => this.changeNameHandler(e, person.id)}
                            />
                        )
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hello, I'm first React App</h1>
                <button onClick={this.showPersonsHandler}>Show Persons</button>
                {persons}
            </div>
        );
    }


    /*

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
    state = {

        userName: 'Mike'
    }

    changeNameHandler = event => {
        this.setState({
           userName: event.target.value
        });
    }

    render() {
        return(
            <div className="App">
                <UserInput
                    change={this.changeNameHandler}
                    currentValue={this.state.userName}
                />
                <UserOutput name={this.state.userName} />
                <UserOutput/>
                <UserOutput/>
                <UserOutput/>
            </div>
        )
    }

    /*state = {
        persons: [
            {name: 'Max', age: 19}
        ]
    };

    switchNameHandler = (val) => {
        this.setState({
            persons: [
                {name: val, age: 19},
            ]
        });
    }

    changeNameHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 19},
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hello, I'm first React App</h1>
                <button onClick={this.switchNameHandler}>Сlick Me</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Kris')}
                    change={this.changeNameHandler}
                />
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Kris')}
                    change={this.changeNameHandler}
                />
            </div>
        );
    }*/
}

export default App;