import React from 'react'
import "./ColorButton.css"

function ColorButton({bgcolor,setBgcolor}) {
  return (
      <div className="color-option" onClick={()=>{
      setBgcolor(bgcolor);

    }}style={{backgroundColor:bgcolor }}>
    </div>
  
  )
}

export default ColorButton
