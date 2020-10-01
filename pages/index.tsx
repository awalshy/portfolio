import React, { useState, useEffect } from 'react'
import ReactPageScroller from 'react-page-scroller'
import { useDispatch } from 'react-redux'

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
  const dispatch = useDispatch()

  const screenSizeHandler = () => {
    const width = window.innerWidth
    dispatch({
      type: 'RESIZE',
      value: width,
    })
  }

  useEffect(() => {
    GA.GAInit(trackingId)
    GA.GAPage('landingPage')
    dispatch({ type: 'RESIZE', value: window.innerWidth })
    window.addEventListener('resize', screenSizeHandler)

    return () => window.removeEventListener('resize', screenSizeHandler)
  }, [])

  const handlePageChange = (number) => {
    setPage(number)
  }

  return (
    <Layout
      title="Arthur Walsh"
      dark={dark}
      page={page}
      setPage={setPage}
      landingPage
    >
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
          <div className="lg:h-screen xl:flex lg:flex">
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
