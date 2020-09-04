import React from 'react'

// COMPONENTS
import Layout from './hoc/Layout'
import Header from './components/Header'
import Links from './components/Links'
import Footer from './components/Footer'
function App () {
  return (
    <Layout>
      <Header />
      <Links />
    </Layout>
  )
}

export default App
