import React, { Component } from 'react';

import Char from './Char/Char';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import Validation from './Validation/Validation';

import './App.css';

class App extends Component {

  state = {
    userInput: "",
    userName: 'Dynamic User Name'
  };

  calculateTextLengthHandler = (event) => {
    this.setState({userInput: event.target.value});
  };

  changeUserNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  };

  deleteCharHandler = (index) => {
    const chars = this.state.userInput.split('');
    chars.splice(index, 1);
    this.setState({userInput: chars.join('')});
  };

  render() {
    const charList = this.state.userInput.split('')
      .map((c, index) => {
        return <Char
            key={index}
            char={c}
            click={() => this.deleteCharHandler(index)}
          />;
      });

    return (
      <div className="App">
        <div>
          <h2>Exercise #1</h2>
          <UserInput change={this.changeUserNameHandler} defaultValue={this.state.userName} />
          <UserOutput username="Static User Name" />
          <UserOutput username={this.state.userName} />
        </div>
        <div>
          <h2>Exercise #2</h2>
          <input onChange={this.calculateTextLengthHandler} value={this.state.userInput} />
          <p>Input length: <b>{this.state.userInput.length}</b> character(s).</p>
          <Validation inputLength={this.state.userInput.length} />
          <div>{charList}</div>
        </div>
      </div>
    );
  }
}

export default App;
