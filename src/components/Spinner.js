import React from 'react'
import loadingSpinner from './loadingSpinner.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loadingSpinner} alt='loading' />
    </div>
  )
}

export default Spinner
