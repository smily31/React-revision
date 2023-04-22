import React from 'react'
import Person from './Person'

const NameList = () => {
    const names = ['Harry', 'Hermione', 'Ron', 'Hermione']
    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)

    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Harry',
    //         skill: 'Flying'
    //     },
    //     {
    //         id: 2,
    //         name: 'Hermione',
    //         skill: 'Reading'
    //     },
    //     {
    //         id: 3,
    //         name: 'Ron',
    //         skill: 'Helping'
    //     }
    // ]
    // const personList = persons.map(person => <h2>I am {person.name}, I know {person.skill}</h2>)
    // const personList = persons.map(person => <Person key={person.id} person={person}/>)
  return (
    <div>
      {
        // personList
        nameList
      }
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
    </div>
  )
}

export default NameList
