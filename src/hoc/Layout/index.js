import React from 'react'

// STYLES
import styles from './Layout.module.css'

// COMPONENTS
import Footer from '../../components/Footer'
import ReturnHomeButton from '../../components/ReturnHomeButton'

const Layout = ({ children, navHomeButton }) => {
  console.log('Why hello there. What brings you to this part of town?')
  let returnHome = null

  if (navHomeButton) {
    returnHome = <ReturnHomeButton />
  }
  return (
    <div className={styles.page}>
      {returnHome}
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
