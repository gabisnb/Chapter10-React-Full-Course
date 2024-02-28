import React from 'react'

const SetColor = ({ color , setColor }) => {
  return (
    <input
        className='inputColor'
        type='text'
        placeholder='Enter a color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
    />
  )
}

export default SetColor
