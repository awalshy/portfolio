import React from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

const Nav = ({ dark }: { dark: boolean }): JSX.Element => {
  const router = useRouter()
  return (
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
          onClick={() => router.push('/')}
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
    </nav>
  )
}

const mapStateToProps = (state) => ({
  dark: state.darkTheme.value,
})

export default connect(mapStateToProps)(Nav)
