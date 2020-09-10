import React, { useState, useEffect } from 'react'

import * as GA from '../components/GA'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import LandingView from '../components/LandingView'
import Profile from '../components/Profile'
import Education from '../components/Education'
import Competencies from '../components/Competencies'
import Contact from '../components/Contact'

export const Home = ({ trackingId }): JSX.Element => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    GA.initGA(trackingId)
    GA.pageGA('landingPage')
  }, [])

  return (
    <Layout title="Arthur Walsh" dark={dark}>
      <LandingView dark={dark} setDark={setDark} />
      <Nav />
      <Profile />
      <div className="h-screen flex">
        <Education />
        <Competencies />
      </div>
      <Contact />
    </Layout>
  )
}

Home.getInitialProps = () => {
  return { trackingId: process.env.GA_TRACKING_ID }
}

export default Home
