import React from 'react';
import {BrowserRouter, NavLink, Redirect, Route, Switch} from 'react-router-dom';

import Courses from './Courses/Courses';
import NotFound from './NotFound/NotFound';
import Users from './Users/Users';

import styles from './Exercise.module.css';

class Exercise3 extends React.Component{

  render() {
    return (
      <div className={styles.exercise}>
        <h2>Exercise #3</h2>
        <BrowserRouter basename={this.props.match.url}>
          <ul>
            <li><NavLink exact to="/courses">Courses</NavLink></li>
            <li><NavLink exact to="/users">Users</NavLink></li>
          </ul>

          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Redirect from="/all-courses" to="/courses" />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default Exercise3;
