import React from 'react'

// STYLES
import styles from './Layout.module.css'

// COMPONENTS
import Footer from '../../components/Footer'

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        {children}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
