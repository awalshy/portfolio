import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { GAEvent } from '../components/GA'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

type LandingViewProps = {
  dark: boolean
  setDark: (boolean) => void
}

const LandingView = ({ dark, setDark }: LandingViewProps) => {
  const [hoverDark, setHoverDark] = useState(false)

  const switchToDarkMode = () => {
    if (dark) GAEvent('click', 'lightMode')
    else GAEvent('click', 'darkMode')
    setDark(!dark)
  }

  return (
    <div className="h-screen relative">
      <div
        className="row flex justify-between py-1 px-3 w-full z-40"
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
      <div className="h-screen w-full absolute top-0 left-0 flex justify-center items-center">
        <div>
          <div
            className="h-6/10 text-shadow-xl"
            style={{ color: dark ? '#E6E6E6' : '#1E2533' }}
          >
            <div className="text-4xl">Hi I&apos;m</div>
            <text className="text-6xl">Arthur Walsh</text>
          </div>
          <div
            className="h-4/10 row flex justify-between text-md py-2"
            style={{ color: dark ? '#E6E6E6' : '#1E2533' }}
          >
            <div className="py-1">Student, Freelancer.</div>
            <div
              className="flex row items-center border px-2 py-1 rounded-lg"
              onClick={() => GAEvent('click', 'see-work-button')}
              style={{ borderColor: '#1e2533' }}
            >
              <AnchorLink href="#presentation">See My Work</AnchorLink>
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
  )
}

export default LandingView
