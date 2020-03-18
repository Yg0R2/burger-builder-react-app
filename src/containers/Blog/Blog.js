import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {

  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={{
                pathname: this.props.match.url + '/new-post',
                hash: '#submit',
                search: '?param1=value1'
              }}
              >
                New Post
              </Link></li>
            </ul>
          </nav>
        </header>
        {/*
        <Route path="/" exact render={() => <h1>home</h1>} />
        <Route path="/" render={() => <h1>home 2</h1>} />
        */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }

}

export default Blog;
