import React, {Component} from 'react';
import './style.sass';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
        <div className="App">
            <h1>Hello, I'm first React App</h1>
            <Person name='John' />
        </div>
    );
  }
}

export default App;