import React from 'react'
import Dashboard from './widgets/Dashboard'
import YearResults from './widgets/YearsResults'
import { Switch, Route } from 'react-router-dom'

export default props => {
  return (
    <div className='content d-flex justify-content-center aling-items-center'>
      <Switch>
        <Route path='/years'>
          <YearResults />
        </Route>
        <Route path='/'>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  )
}
