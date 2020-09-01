import React from 'react'

// COMPONENTS
import NavLink from '../NavLink'

// STYLES
import styles from './Links.module.css'

const Links = () => {
  return (
    <>
      <h1 className={styles.Links}>Links</h1>
      <NavLink name='Test' dest='#'/>
    </>
  )
}

export default Links
