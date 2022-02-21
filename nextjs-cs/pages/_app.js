import '../styles/globals.css'
import Navigation from '../components/navigation/Navigation'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  )
}
    
export default MyApp
