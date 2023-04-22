import React from 'react'

// This is a good way to render  list
const Person = ({person}) => {
  return (
    <div>
      <h2>I am {person.name}, I know {person.skill}</h2>
    </div>
  )
}

export default Person
