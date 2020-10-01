import React, { useEffect, useState } from 'react'
import ReactPageScroller from 'react-page-scroller'
import { useDispatch } from 'react-redux'

import Layout from '../components/Layout'
import Project from '../components/Project'
import MoreProjects from '../components/MoreProjects'

const Projects = () => {
  const [page, setPage] = useState(0)
  const dispatch = useDispatch()

  const handlePageChange = (number) => {
    setPage(number)
  }

  const screenSizeHandler = () => {
    const width = window.innerWidth
    dispatch({
      type: 'RESIZE',
      value: width,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', screenSizeHandler)

    return () => window.removeEventListener('resize', screenSizeHandler)
  }, [])

  return (
    <Layout title="Project | Arthur Walsh">
      <div className="relative">
        <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={page}
        >
          <Project
            backgroundColor="#1E2533"
            color="#9C4221"
            title="Vigilate Et Orate"
            content="This App is sending some notifications on defined prayer times to help catholics to do the prayers they usally forget"
            imageSource="/images/veto.png"
            linkTitle="View on Github"
            linkAdress="https://github.com/awalshy/VigilateEtOrate"
            appAdress="https://play.google.com/store/apps/details?id=com.prayernotifs.app"
            technology="React Native | Using Expo.io"
            isPortraitImage
          />
          <Project
            backgroundColor="#9C4221"
            color="#1E2533"
            title="The House Of English"
            content="A Website built for an English School Teacher"
            imageSource="/images/the.png"
            linkTitle="View Website"
            linkAdress="https://thehouseofenglish.fr"
            technology="React | Using NextJS"
            inverted
            website
          />
          <MoreProjects />
        </ReactPageScroller>
      </div>
    </Layout>
  )
}

export default Projects
