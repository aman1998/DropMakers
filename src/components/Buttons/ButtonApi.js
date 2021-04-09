import React from 'react';

const Button = ({loading, title}) => {
  return (
    <>
    { loading ? 
      <div className='btn'>
        <div className='loading'></div>
      </div> : 
      <button className='btn' type='submit'>{title}</button>
    }
    </>
  )
}

export default Button
