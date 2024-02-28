import React from 'react'
import SetColor from './SetColor';
import ColorDisplay from './ColorDisplay';

const Content = () => {
  const [color, setColor] = React.useState('');
  
  return (
    <main className='content'>
        <ColorDisplay color={color} />
        <SetColor color={color} setColor={setColor} />
    </main>
  )
}

export default Content
