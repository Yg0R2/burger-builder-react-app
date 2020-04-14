import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';

import styles from './Navigation.module.css';
import Exercise1 from '../../Exercise-1/Exercise1';
import Exercise2 from '../../Exercise-2/Exercise2';
import Exercise3 from '../../Exercise-3/Exercise3';

const navigation = (props) => (
  <div className={styles.navigation}>
    <header>
      <nav>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/exercise/1">Exercise #1</NavLink></li>
          <li><NavLink exact to="/exercise/2">Exercise #2</NavLink></li>
          <li><NavLink exact to="/exercise/3">Exercise #3</NavLink></li>
        </ul>
      </nav>
    </header>

    <Switch>
      <Route path="/exercise/1" component={Exercise1} />
      <Route path="/exercise/2" component={Exercise2} />
      <Route path="/exercise/3" component={Exercise3} />
      <Route path="/" exact render={() => <h1>Use the links to navigate</h1>} />
    </Switch>
  </div>
);

export default navigation;
