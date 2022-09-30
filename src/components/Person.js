import React from 'react'

function Person({hero}) {
  return (
    <div>
        <h2>
            I am {hero.name}. I am {hero.age}. I know {hero.skill}
        </h2>
    </div>
  )
}

export default Person