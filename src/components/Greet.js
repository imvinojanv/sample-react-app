import React from 'react'

// function Greet() {
//     return <h1>Hello Vinojan</h1>
// }

const Greet = props => {  // props just an objects contain the values

    const { name, heroName, children } = props        // name, heroName, children are come from the props object
    return (
        <div>
            <h2>
                {name} as {heroName}
            </h2>
            {children}      {/* props.children */}
        </div>
    )
}

export default Greet