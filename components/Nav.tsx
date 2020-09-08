import React from 'react'

const Nav = () => {
  return (
    <nav
      className="flex justify-between sticky top-0 py-3 px-8 z-40 border-b"
      style={{ backgroundColor: '#e6e6e6', borderColor: '#1e2533' }}
    >
      <div className="text-2xl">
        <text>Arthur Walsh</text>
      </div>
      <div className="flex justify-between items-center text-blue-900">
        <text className="px-2">Home</text>
        <text className="px-2">Education</text>
      </div>
    </nav>
  )
}

export default Nav
