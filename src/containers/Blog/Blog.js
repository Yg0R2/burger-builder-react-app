import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';

import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost'
import Posts from '../../containers/Blog/Posts/Posts';

import './Blog.css';

class Blog extends Component {

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
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }

}

export default Blog;
