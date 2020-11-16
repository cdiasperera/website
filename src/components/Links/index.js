import React from 'react'

// COMPONENTS
import NavLink from '../NavLink'

// STYLES
import styles from './Links.module.css'

const Links = () => {
  return (
    <div className={styles.Links}>
      <h1>Links</h1>
      <div className={styles.list}>
        <NavLink name='A solution for the Partition Problem, via a genetic algorithm' dest='/intro-to-cs-project' />
        <NavLink name='My first website: Yelpcamp' dest='/my-first-website' />
      </div>
    </div>
  )
}

export default Links
