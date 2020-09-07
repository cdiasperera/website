import React from 'react'

// COMPONENTS
import { Link } from 'react-router-dom'

// STYLES
import styles from './NavLink.module.css'

const NavLink = ({ name, dest }) => {
  return (
    <div className={styles.NavLink}>
      <Link to={dest}>> {name}</Link>
    </div>
  )
}

export default NavLink
