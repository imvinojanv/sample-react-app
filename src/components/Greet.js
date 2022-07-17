import React from 'react'

// function Greet() {
//     return <h1>Hello Vinojan</h1>
// }

const Greet = (props) => {  // props just an objects contain the values
    console.log(props)
    return (
        <div>
            <h2>
                {props.name} as {props.heroName}
            </h2>
            {props.children}
        </div>
    )
}

export default Greet