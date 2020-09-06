import React from 'react'
import { Route } from 'react-router-dom'

// COMPONENTS
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
function App () {
  return (
    <>
      <Route path='/' exact component={Landing} />
      <Route path='/about-me' exact component={AboutMe} />
    </>
  )
}

export default App
