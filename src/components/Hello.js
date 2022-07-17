import React from "react";

const Hello = () => {
    // Using the JSX library
    // return (
    //     <div className="Hello-div">
    //         <h1>Hello Abhimanyu</h1>
    //     </div>
    // )

    // Without using the JSX library
    return React.createElement(
        'div', 
        {
            className: 'Hello-div',
            id: 'hello',
            style: {color:'red'}
        }, 
        React.createElement ('h1', null, 'Hello Vinojan')
    )
}

export default Hello