import React from 'react';

import Person from "./Person/Person";

const Persons = (props) => props.persons.map((person, index) => {
  return <Person
    key={person.id}
    clickHandler={() => props.clickHandler(index)}
    name={person.name}
    age={person.age}
    changeHandler={(event) => props.changeHandler(event, person.id)}
  >
    My Hobbies: Coding
  </Person>
});

export default Persons;
