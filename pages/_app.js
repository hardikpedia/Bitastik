import '../styles/globals.css'
import "../components/sidebar/index.css"
// import "./index.css"

import Layout from '../components/layout/Layout'
function MyApp({ Component, pageProps }) {
  return <><Layout><Component {...pageProps} /></Layout></>
}

export default MyApp;
