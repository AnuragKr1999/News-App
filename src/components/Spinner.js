import React, { Component } from 'react'
import loadingSpinner from './loadingSpinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loadingSpinner} alt='loading' />
      </div>
    )
  }
}
