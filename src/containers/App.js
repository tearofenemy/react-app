import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import './App.css';
import Person from "../components/Person/Person";


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
        const style_btn = {
            padding: '16px',
            color: 'white',
            backgroundColor: 'green',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            transition: 'all ease-in-out .25s',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

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

            style_btn.backgroundColor = 'red';
            style_btn[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            };
        }

        const classes = [];

        if(this.state.persons.length <= 2) {
            classes.push('red');
        }
        if(this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <p className={classes.join(' ')}>Hello, I'm first React App</p>
                <Button onClick={this.showPersonsHandler} style={style_btn}>Show Persons</Button>
                {persons}
            </div>
        );
    }


    /*
import Validation from './Validation/Validation';
import Char from './Char/Char';
state = {
        userInput: ''
    }

    changeInputHandler = event => {
        this.setState({userInput: event.target.value});
    }

    deleteCharHandler = index => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    }

    render() {
        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char
                character={ch}
                key={index}
                click={() => this.deleteCharHandler(index)}
            />
        });

        return(
            <div className='App'>
                <input type="text" onChange={(event) => this.changeInputHandler(event)} value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <Validation
                    userLength={this.state.userInput.length}
                />
                {charList}
            </div>
        )
    }

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