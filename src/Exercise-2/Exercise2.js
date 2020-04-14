import React from 'react';

import Char from './Char/Char';
import Validation from './Validation/Validation';

class Exercise2 extends React.Component{

  state = {
    userInput: ""
  };

  calculateTextLengthHandler = (event) => {
    this.setState({userInput: event.target.value});
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
      <div>
        <h2>Exercise #2</h2>
        <input onChange={this.calculateTextLengthHandler} value={this.state.userInput} />
        <p>Input length: <b>{this.state.userInput.length}</b> character(s).</p>
        <Validation inputLength={this.state.userInput.length} />
        <div>{charList}</div>
      </div>
    );
  }

}

export default Exercise2;
