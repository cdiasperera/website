import React from 'react'
import { Route } from 'react-router-dom'

// COMPONENTS
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume'
import IntroToCSProj from './pages/IntroToCSProj'
import YelpCamp from './pages/YelpCamp'

function App () {
  return (
    <>
      <Route path='/' exact component={Landing} />
      <Route path='/about-me' exact component={AboutMe} />
      <Route path='/resume' exact component={Resume} />
      <Route path='/intro-to-cs-project' exact component={IntroToCSProj} />
      <Route path='/my-first-website' exact component={YelpCamp} />
    </>
  )
}

export default App
