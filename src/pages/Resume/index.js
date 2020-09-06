import React from 'react'

// COMPONENTS
import Layout from '../../hoc/Layout'

// STYLES
import styles from './Resume.module.css'

const Resume = () => {
  return (
    <Layout navHomeButton>
      <div className={styles.Resume}>
        <h1> Resume</h1>
        <iframe
          src='./documents/resume.pdf'
          title='Resume'
          width='100%'
          height='400px'
        />
        <p>
          <a href='./documents/resume.pdf'> Download resume</a>
        </p>
      </div>
    </Layout>
  )
}

export default Resume
