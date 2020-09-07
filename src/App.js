import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// COMPONENTS
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume'

function App () {
  return (
    <>
      <Route path='/' exact component={Landing} />
      <Redirect from='/website' to='/' />
      <Route path='/about-me' exact component={AboutMe} />
      <Route path='/resume' exact component={Resume} />
    </>
  )
}

export default App
