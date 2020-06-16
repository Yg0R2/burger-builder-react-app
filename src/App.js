import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

import './web-components/WebComponent';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: 'wtf'
    }

    this.searchElement = React.createRef();
  }

  inputOnChangeHandler = (event) => {
    // Declarative implementation
    this.setState({search: event.target.value});
  }

  input2OnChangeHandler = (event) => {
    // Imperative implementation
    this.searchElement.current.setSearch(event.target.value);
  }

  render() {
    return (
      <div className="App">
       <Counter />
        <div>
         <h3>WebComponent</h3>
         <input onChange={this.inputOnChangeHandler} value={this.state.search} />
         <web-component search={this.state.search} />
       </div>
        <div>
          <h3>WebComponent2</h3>
          <input onChange={this.input2OnChangeHandler} defaultValue="asd" />
          <web-component ref={this.searchElement} search="asd" />
        </div>
      </div>
    );
  }
}

export default App;
