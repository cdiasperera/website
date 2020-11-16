import React from 'react'
import Layout from '../Layout'

import styles from './Post.module.css'
import HorizontalRule from '../../components/HorizontalRules'

const Page = ({children}) => {
  return (
    <Layout navHomeButton>
      <div className={styles.Page}>
        {children}
        <HorizontalRule />
      </div>
    </Layout>
  )
}

export default Page
