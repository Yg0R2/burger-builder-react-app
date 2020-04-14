import React from 'react';
import {Link, Route} from 'react-router-dom';

import Course from '../Course/Course';

import './Courses.css';

class Courses extends React.Component {

  state = {
    courses: [
      {id: 1, title: 'Title 1'},
      {id: 2, title: 'Title 2'}
    ]
  };

  render() {
    let courses = this.state.courses.map(course => {
      return (
        <Link
          key={course.id}
          to={{
            pathname: this.props.match.url + '/' + course.id,
            search: '?title=' + course.title
          }}>
          <article className="course">{course.title}</article>
        </Link>
      );
    });

    return (
      <div>
        <h3>Courses</h3>
        <section className="courses">
          {courses}
        </section>
        <Route path={this.props.match.url + '/:courseId'} component={Course} />
      </div>
    );
  }

}

export default Courses;
