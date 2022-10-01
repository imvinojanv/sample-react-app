import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
        <h1 className='error'>Error</h1>          {/* Its work the CSS module from App.js */}
        {/* <h1 className={styles.success}>Success</h1> */}    {/* We can't use this one */}
            
        <h1 style={heading}>Inline CSS</h1>
    </div>
  )
}

export default Inline