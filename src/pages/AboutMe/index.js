import React from 'react'

// COMPONENTS
import Layout from '../../hoc/Layout'

// STYLES
import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <Layout navHomeButton>
      <div className={styles.AboutMe}>
        <h1> About Me</h1>
        <p>
          Hi! I'm a computer science student, currently studying at
          the University of Groningen, in the Netherlands . I'm currently in my
          first year, expecting to graduate in July, 2023.
        </p>
        <p>
          My research interests are somewhat broad, at this early stage of my
          studies. That said, I'm particularly interested in:
        </p>
        <ul>
          <li>Context-aware AI</li>
          <li>Discrete mathematics</li>
          <li>Computer architecture</li>
          <li>Fundamental computing</li>
        </ul>
        <p>I also like rock climbing quite a bit!</p>
      </div>
    </Layout>
  )
}

export default AboutMe
