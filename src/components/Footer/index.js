import React from 'react'

// COMPONENTS
import { Link } from 'react-router-dom'

// STYLES
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <div className={styles.Footer}>
      <ul>
        <span className={styles.Category}>Links</span>
        <li><Link to='/resume'> Resume </Link></li>
        <li><Link to='/about-me'>About Me</Link></li>
        <li><a href='https://github.com/cdiasperera/website'>Source</a></li>
      </ul>
    </div>
  )
}

export default Footer
