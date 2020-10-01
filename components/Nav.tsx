import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = ({
  dark,
  width,
  page,
  setPage,
}: {
  dark: boolean
  page: number
  width: number
  setPage: (number) => void
}) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [isSm, setIsSm] = useState(false)

  useEffect(() => {
    setIsSm(width < 640)
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
          onClick={() => setPage(0)}
        >
          <text>Arthur Walsh</text>
        </div>
        {!isSm && (
          <div
            className="flex justify-between items-center"
            style={{ color: dark ? '#e6e6e6' : '#1e2533' }}
          >
            <text
              onClick={() => setPage(0)}
              className={`px-2 py-1 cursor-pointer`}
            >
              Home
            </text>
            <text
              onClick={() => setPage(1)}
              className={`px-2 py-1 cursor-pointer ${
                page == 1 ? 'border-b-2 border-orange-800' : ''
              }`}
            >
              About Me
            </text>
            <text
              onClick={() => setPage(2)}
              className={`px-2 py-1 cursor-pointer ${
                page == 2 ? 'border-b-2 border-orange-800' : ''
              }`}
            >
              Education
            </text>
            <text
              onClick={() => setPage(3)}
              className={`px-2 py-1 cursor-pointer text-orange-800 ${
                page == 3 ? 'border-b-2 border-orange-800' : ''
              }`}
            >
              Hire Me
            </text>
            <div
              className="px-2 mx-2 py-1 text-orange-800 hover:text-blue-900 border border-orange-800 cursor-pointer rounded-md"
              onClick={() => router.push('/projects')}
            >
              My Projects
            </div>
          </div>
        )}
        {isSm && (
          <div className="flex items-center" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} size="2x" />
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
            onClick={() => setPage(0)}
          >
            <p>Home</p>
          </div>
          <div
            className="flex flex-row-reverse py-2 px-8"
            onClick={() => setPage(1)}
          >
            <p>About Me</p>
          </div>
          <div
            className="flex flex-row-reverse py-2 px-8"
            onClick={() => setPage(2)}
          >
            <p>Education</p>
          </div>
          <div
            className="flex flex-row-reverse py-2 px-8"
            onClick={() => setPage(3)}
          >
            <p>Hire Me</p>
          </div>
          <div
            className="mt-1 flex flex-row-reverse py-2 px-8 text-orange-800"
            onClick={() => router.push('/projects')}
          >
            <p>Projects</p>
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
