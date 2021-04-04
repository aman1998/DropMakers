import React from 'react';

const Button = ({loading}) => {
  return (
    <>
    { loading ? 
      <div className='btn'>
        <div className='loading'></div>
      </div> : 
      <button className='btn' type='submit'>SIGN IN</button>
    }
    </>
  )
}

export default Button
