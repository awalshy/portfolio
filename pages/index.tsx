import React, { useState, useEffect } from 'react'
import ReactPageScroller from 'react-page-scroller'

import * as GA from '../components/GA'
import Layout from '../components/Layout'
import LandingView from '../components/LandingView'
import Profile from '../components/Profile'
import Education from '../components/Education'
import Competencies from '../components/Competencies'
import Contact from '../components/Contact'

export const Home = ({ trackingId }): JSX.Element => {
  const [dark, setDark] = useState(false)
  const [page, setPage] = useState(0)

  useEffect(() => {
    GA.GAInit(trackingId)
    GA.GAPage('landingPage')
  }, [])

  const handlePageChange = (number) => {
    setPage(number)
  }

  return (
    <Layout title="Arthur Walsh" dark={dark} page={page} setPage={setPage}>
      <div className="relative">
        <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={page}
        >
          <LandingView
            dark={dark}
            page={page}
            nextPage={setPage}
            setDark={setDark}
          />
          <Profile />
          <div className="lg:h-screen md:flex lg:flex">
            <Education />
            <Competencies />
          </div>
          <Contact />
        </ReactPageScroller>
      </div>
    </Layout>
  )
}

Home.getInitialProps = () => {
  return { trackingId: process.env.GA_TRACKING_ID }
}

export default Home
