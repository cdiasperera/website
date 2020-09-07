import React from 'react'

// RESOURCES
import resume from '../../documents/resume.pdf'

// COMPONENTS
import Layout from '../../hoc/Layout'
import { Link } from 'react-router-dom'

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
          <Link href={resume}> Download resume</Link>
        </p>
      </div>
    </Layout>
  )
}

export default Resume
