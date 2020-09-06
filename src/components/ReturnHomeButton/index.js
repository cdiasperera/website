import React from 'react'

// STYLES
import styles from './ReturnHomeButton.module.css'

const ReturnHomeButton = () => {
  console.log('hi')
  return (
    <a href='/' className={styles.ReturnHomeButton}> &lt;  Home</a>
  )
}

export default ReturnHomeButton
