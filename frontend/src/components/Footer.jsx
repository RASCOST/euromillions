import React from 'react'

export default props => {
  const year = new Date()

  return (
    <div className='footer footer-content'>
      <span>RASC&#174;{year.getFullYear()}</span>
    </div>
  )
}
