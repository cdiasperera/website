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
        <NavLink name='Test' dest='https://www.google.com' />
        <NavLink name='Test' dest='https://www.google.com' />
        <NavLink name='Test' dest='https://www.google.com' />
        <NavLink name='Test' dest='https://www.google.com' />
        <NavLink name='Test' dest='https://www.google.com' />
        <NavLink name='Test' dest='https://www.google.com' />
        <NavLink name='Test' dest='https://www.google.com' />
        <NavLink name='Test' dest='https://www.google.com' />
        <NavLink name='Test' dest='https://www.google.com' />
        <NavLink name='Test' dest='https://www.google.com' />
        <NavLink name='Test' dest='https://www.google.com' />
      </div>
    </div>
  )
}

export default Links
