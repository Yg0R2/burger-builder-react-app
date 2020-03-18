import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';

import NewPost from './NewPost/NewPost';
import Posts from '../../containers/Blog/Posts/Posts';

import './Blog.css';

class Blog extends Component {

  state = {
    authenticated: false
  };

  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li><NavLink
                activeClassName="active"
                activeStyle={{
                  textDecoration: 'underline'
                }}
                exact to="/"
              >
                Home
              </NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?param1=value1'
              }}
              >
                New Post
              </NavLink></li>
            </ul>
          </nav>
        </header>
        {/*
        <Route path="/" exact render={() => <h1>home</h1>} />
        <Route path="/" render={() => <h1>home 2</h1>} />
        */}
        <Switch>
          {this.state.authenticated ? <Route path="/new-post" component={NewPost} /> : null}
          <Route path="/posts" component={Posts} />
          {/*<Redirect from="/" to="/posts" />*/}
          {/*<Route path="/" component={Posts} />*/}
          <Route render={() => <h1>Page Not Found!</h1>}/>
        </Switch>
      </div>
    );
  }

}

export default Blog;
