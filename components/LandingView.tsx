import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

type LandingViewProps = {
  dark: boolean
  setDark: (boolean) => void
}

const LandingView = ({ dark, setDark }) => {
  const [hoverDark, setHoverDark] = useState(false)

  return (
    <div className="h-screen">
      <div
        className="row flex justify-between py-1 px-3"
        style={{ color: dark ? '#E6E6E6' : '#1E2533' }}
      >
        <div
          className="cursor-pointer"
          onClick={() => setDark(!dark)}
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
      <div className="h-full flex justify-center items-center top-0">
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
            <div>Student, Freelancer.</div>
            <div className="flex row items-center">
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