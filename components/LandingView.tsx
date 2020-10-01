import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Particles from 'react-tsparticles'

import { DARK, LIGHT } from '../redux/actions/darkThemeActions'
import { GAEvent } from '../components/GA'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// import { useCookies } from 'react-cookie'

type LandingViewProps = {
  dark: boolean
  setDark: (boolean) => void
  page: number
  nextPage: (number: number) => void
}

const LandingView = ({ dark, setDark, page, nextPage }: LandingViewProps) => {
  const [hoverDark, setHoverDark] = useState(false)
  const dispatch = useDispatch()
  // const [cookies, setCookie, _deleteCookie] = useCookies(['dark'])

  // useEffect(() => {
  //   if (cookies.dark === true) dispatch({ type: DARK })
  // })

  const switchToDarkMode = () => {
    if (dark) {
      GAEvent('click', 'lightMode')
      dispatch({
        type: LIGHT,
      })
      // setCookie('dark', false, { path: '/', expires: new Date(Date.now() + 2) })
    } else {
      GAEvent('click', 'darkMode')
      dispatch({
        type: DARK,
      })
      // setCookie('dark', true, { path: '/', expires: new Date(Date.now() + 2) })
    }
    setDark(!dark)
  }

  /* eslint-disable @typescript-eslint/camelcase */
  const getConfig = () => ({
    fpsLimit: 50,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onClick: { enable: false, mode: 'repulse' },
        onHover: { enable: false, mode: 'repulse' },
        resize: false,
      },
    },
    particles: {
      color: {
        value: dark ? '#e6e6e6' : '#1e2533',
      },
      links: {
        color: dark ? '#e6e6e6' : '#1e2533',
        distance: 160,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        ouMode: 'bounce',
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.6,
      },
    },
  })
  /* eslint-enable no-alert, no-console */

  return (
    <div className="h-screen relative">
      <div className="absolute top-0 z-0">
        <Particles
          width={`${window.innerWidth}px`}
          height={`${window.innerHeight}px`}
          options={getConfig()}
        />
      </div>
      <div
        className="row flex justify-between py-1 px-3 w-full absolute top-0 left-0 z-40"
        style={{ color: dark ? '#E6E6E6' : '#1E2533' }}
      >
        <div
          className="cursor-pointer"
          onClick={switchToDarkMode}
          onMouseEnter={() => setHoverDark(true)}
          onMouseLeave={() => setHoverDark(false)}
        >
          <text className="pr-1">{dark ? 'light' : 'dark'}</text>
          {hoverDark && !dark && <FontAwesomeIcon icon={faMoon} />}
          {hoverDark && dark && <FontAwesomeIcon icon={faSun} />}
        </div>
        <div>
          <text className="px-1">fr</text>
          <text className="px-1">en</text>
        </div>
      </div>
      <div className="h-screen w-full absolute top-0 left-0 flex justify-center items-center z-0">
        <div>
          <div
            className="h-6/10 text-shadow-xl"
            style={{ color: dark ? '#E6E6E6' : '#1E2533' }}
          >
            <div className="text-4xl">Hi I&apos;m</div>
            <text className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl">
              Arthur Walsh
            </text>
          </div>
          <div
            className="h-4/10 row md:flex lg:flex justify-between text-md py-2"
            style={{ color: dark ? '#E6E6E6' : '#1E2533' }}
          >
            <div className="py-1 flex justify-center">Student, Freelancer.</div>
            <div
              className="flex justify-center items-center border px-2 py-1 rounded-lg"
              onClick={() => GAEvent('click', 'see-work-button')}
              style={{ borderColor: '#1e2533' }}
            >
              <div className="flex row cursor-pointer">
                <div
                  onClick={() => {
                    nextPage(page + 1)
                  }}
                >
                  See My Work
                </div>
                <svg
                  className="animate-bounce w-6 h-4"
                  style={{
                    color: dark ? '#E6E6E6' : '#1E2533',
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                    stroke: 'currentcolor',
                  }}
                  viewBox="0 0 24 24"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingView
