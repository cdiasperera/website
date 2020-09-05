import React from 'react'

// STYLES
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <ul>
        <span className={styles.Category}>Links</span>
        <li>Resume</li>
        <li>About me</li>
        <li><a href='https://github.com/cdiasperera/website'>Source</a></li>
      </ul>
    </div>
  )
}

export default Footer
