import React from 'react'

export default props => {
  return (
    <div>
      <div className='last-container'>
        <h2 className='text-center'>Last Result</h2>
        <div className='numbers-container'>
          <div className='number-circle'>{props.lastNumbers[0]}</div>
          <div className='number-circle'>{props.lastNumbers[1]}</div>
          <div className='number-circle'>{props.lastNumbers[2]}</div>
          <div className='number-circle'>{props.lastNumbers[3]}</div>
          <div className='number-circle'>{props.lastNumbers[4]}</div>
          <div className='number-star'>{props.lastNumbers[5]}</div>
          <div className='number-star'>{props.lastNumbers[6]}</div>
        </div>
        <div>
          <small>Last day: {props.lastDay}</small>
        </div>
      </div>
    </div>
  )
}
