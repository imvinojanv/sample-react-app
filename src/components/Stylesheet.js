import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''      // Conditionally apply the class (If Necessary)
  return (
    <h1 className={`${className} font-xl`}>Stylesheet</h1>
  )
}

export default Stylesheet