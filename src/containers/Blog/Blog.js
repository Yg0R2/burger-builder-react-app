import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Posts from '../../containers/Blog/Posts/Posts';

import './Blog.css';

class Blog extends Component {

  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>home</h1>} />
        <Route path="/" render={() => <h1>home 2</h1>} />
      </div>
    );
  }

}

export default Blog;
