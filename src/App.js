import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // Required to define, when the context of the application is different
      <BrowserRouter basename="/">
        <div className="App">
          <Blog/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
