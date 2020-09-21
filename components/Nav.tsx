import React from 'react'
import { useRouter } from 'next/router'

const Nav = ({
  page,
  setPage,
}: {
  page: number
  setPage: (n: number) => void
}) => {
  const router = useRouter()
  return (
    <nav
      className="flex justify-between absolute top-0 py-3 px-8 z-40 w-full"
      style={{ backgroundColor: '#e6e6e6' }}
    >
      <div
        className="text-2xl cursor-pointer"
        style={{ color: '#1e2533' }}
        onClick={() => setPage(0)}
      >
        <text>Arthur Walsh</text>
      </div>
      <div className="flex justify-between items-center text-blue-900">
        <text onClick={() => setPage(0)} className={`px-2 py-1 cursor-pointer`}>
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
          className={`px-2 py-1 cursor-pointer ${
            page == 3 ? 'border-b-2 border-orange-800' : ''
          }`}
        >
          Contact
        </text>
        <div
          className="px-2 mx-2 py-1 text-orange-800 hover:text-blue-900 border border-orange-800 rounded-md"
          onClick={() => router.push('/projects')}
        >
          My Projects
        </div>
      </div>
    </nav>
  )
}

export default Nav
