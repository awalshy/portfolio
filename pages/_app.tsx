import React, { useEffect } from 'react'
import * as GA from '../components/GA'
import '../css/tailwind.css'

const MyApp = ({ Component, pageProps, trackingId }) => {
  useEffect(() => {
    GA.initGA(trackingId)
  })

  return <Component {...pageProps} />
}

MyApp.getInitialProps = () => {
  return { trackingId: process.env.GA_TRACKING_ID }
}

export default MyApp
