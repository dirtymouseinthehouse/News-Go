import React, { Component } from 'react'
import infinity from './Infinity.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center align-middle'>
        <img src={infinity} alt="loading" height={100}/>
      </div>
    )
  }
}
