import React from 'react';

const Button = ({loading, title, failed}) => {
  return (
    <>
    { loading ? 
      <div className='btn'>
        <div className='loading'></div>
      </div> : 
      failed ? 
      <button className='btn' type='submit' style={{backgroundColor: '#D8000C'}}>Repeat</button> :
      <button className='btn' type='submit'>{title}</button>
    }
    </>
  )
}

export default Button
