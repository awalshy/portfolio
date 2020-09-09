import React, { useState } from 'react'

import Layout from '../components/Layout'
import Nav from '../components/Nav'
import LandingView from '../components/LandingView'
import Profile from '../components/Profile'
import Education from '../components/Education'
import Competencies from '../components/Competencies'
import Contact from '../components/Contact'

export const Home = (): JSX.Element => {
  const [dark, setDark] = useState(false)

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

export default Home
