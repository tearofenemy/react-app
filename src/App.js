import React, {Component} from 'react';
import './style.sass';
import './App.css';
import Person from './Person/Person';

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
            </div>
        );
    }
}

export default App;