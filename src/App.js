import React, {Component} from 'react';
import './style.sass';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
        <div className="App">
            <h1>Hello, I'm first React App</h1>
            <Person name='John' age='19' />
            <Person name='Kate' age='21'>Some text</Person>
            <Person name='Max' age='81' />
        </div>
    );
  }
}

export default App;