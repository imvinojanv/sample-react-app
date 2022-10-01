import React from 'react'
import Person from './Person'

function NameList() {

    const heros = [
        {
            id: 1,
            name: 'Bat Man',
            age: 45,
            skill: 'Java'
        },
        {
            id: 2,
            name: 'Iron Man',
            age: 34,
            skill: 'Vue JS'
        },
        {
            id: 3,
            name: 'Super Man',
            age: 35,
            skill: 'React'
        }
    ]
    const heroList = heros.map(hero => <Person key={hero.id} hero={hero} />)      // Passing the array as props to Person.js
    // This key={} is used to solve this error : Each child in a list should have a unique "key" prop.
    
  return (
    <div>
        {heroList}
    </div>


    // <div>
    //     <h2>{name[0]}</h2>
    //     <h2>{name[1]}</h2>
    //     <h2>{name[2]}</h2>
    // </div>
  )
}

export default NameList