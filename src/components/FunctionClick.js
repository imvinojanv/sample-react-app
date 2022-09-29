import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Button Clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>     {/* Don't be used as clickHandle() - It's not working  */}
    </div>
  )
}

export default FunctionClick