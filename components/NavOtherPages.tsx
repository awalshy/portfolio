import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = ({
  dark,
  width,
}: {
  dark: boolean
  width: number
}): JSX.Element => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [isSm, setIsSm] = useState(false)

  useEffect(() => {
    setIsSm(width < 480)
  }, [width])

  return (
    <div>
      <nav
        className={`flex justify-between absolute top-0 py-3 px-8 z-40 w-full ${
          dark ? 'border-b border-white' : ''
        }`}
        style={{ backgroundColor: dark ? '#1e2533' : '#e6e6e6' }}
      >
        <div
          className="text-2xl cursor-pointer"
          style={{ color: dark ? '#e6e6e6' : '#1e2533' }}
          onClick={() => router.push('/')}
        >
          <text>Arthur Walsh</text>
        </div>
        {!isSm && (
          <div
            className="flex justify-between items-center"
            style={{ color: dark ? '#e6e6e6' : '#1e2533' }}
          >
            <text
              onClick={() => router.push('/')}
              className={`px-2 py-1 cursor-pointer`}
            >
              Home
            </text>
            <text
              onClick={() => router.push('/projects')}
              className={`px-2 py-1 cursor-pointer`}
            >
              Projects
            </text>
            <div
              className="px-2 mx-2 py-1 cursor-pointer text-orange-800 rounded-md border border-orange-800"
              onClick={() => router.push('/')}
            >
              Hire Me
            </div>
          </div>
        )}
        {isSm && (
          <div className="flex items-center" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} size={'2x'} />
          </div>
        )}
      </nav>
      {open && (
        <div
          className="flex flex-col"
          style={{
            marginTop: 60,
            backgroundColor: dark ? '#1e2533' : '#e6e6e6',
          }}
        >
          <div
            className="flex flex-row-reverse py-2 px-8"
            onClick={() => router.push('/')}
          >
            <p>Home</p>
          </div>
          <div
            className="flex flex-row-reverse py-2 px-8"
            onClick={() => router.push('/projects')}
          >
            <p>Projects</p>
          </div>
          <div
            className="mt-1 flex flex-row-reverse py-2 px-8"
            onClick={() => router.push('/')}
          >
            <p style={{ color: dark ? '#e6e6e6' : '#1e2533' }}>Hire Me</p>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  dark: state.darkTheme.value,
  width: state.screenSize.width,
})

export default connect(mapStateToProps)(Nav)
