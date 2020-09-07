import React from 'react'

// COMPONENTS
import { Link } from 'react-router-dom'

// STYLES
import styles from './ReturnHomeButton.module.css'

const ReturnHomeButton = () => {
  return (
    <Link to='/' className={styles.ReturnHomeButton}> &lt;  Home</Link>
  )
}

export default ReturnHomeButton
