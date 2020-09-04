import React from 'react'

// STYLES
import styles from './NavLink.module.css'

const NavLink = ({ name, dest }) => {
  return (
    <div className={styles.NavLink}>
      <a href={dest}>> {name}</a>
    </div>
  )
}

export default NavLink
