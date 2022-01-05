import React from 'react'
import '../styles/globals.css'
import '../components/notes/styles.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )


}

export default MyApp



