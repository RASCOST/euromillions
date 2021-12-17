import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div className='mt-3'>
      <ul className='list-unstyled ml-3'>
        <Link className='text-decoration-none' to='/'>
          <li><i className='fa fa-tachometer mr-3' aria-hidden='true' />Dashboard</li>
        </Link>
        <Link className='text-decoration-none' to='/years'>
          <li><i className='fa fa-bar-chart mr-3' aria-hidden='true' />Years Results</li>
        </Link>
      </ul>
    </div>
  )
}
