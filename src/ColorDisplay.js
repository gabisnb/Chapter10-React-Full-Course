import React from 'react'

const ColorDisplay = ({ color }) => {
  return (
    <label 
        className='colorDisplay'
        style={{backgroundColor: color}}
    >{color.trim() === '' ? "Empty Value" : color}</label>
  )
}

export default ColorDisplay
