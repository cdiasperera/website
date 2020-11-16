import React from 'react'

// RESOURCES
import resume from '../../documents/resume.pdf'

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
          src={resume}
          title='Resume'
          width='100%'
          height='800px'
        />
        <p>
          <a href={resume}> Download resume</a>
        </p>
      </div>
    </Layout>
  )
}

export default Resume
