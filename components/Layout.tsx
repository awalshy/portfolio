import React from 'react'
import Head from 'next/head'

import Nav from './Nav'

const Layout = ({
  children,
  title,
  dark,
  page,
  setPage,
}: {
  title: string
  children
  dark: boolean
  page?: number
  setPage?: (number: number) => void
}) => {
  return (
    <div>
      <Head>
        <title>{title || 'Arthur Walsh'}</title>
        <link
          rel="icon"
          href={dark ? '/icons/favicon-dark.ico' : '/icons/favicon-light.ico'}
        />
      </Head>
      {page !== 0 && (
        <header>
          <Nav page={page} setPage={setPage} />
        </header>
      )}
      <main style={{ backgroundColor: dark ? '#1E2533' : '#E6E6E6' }}>
        {children}
      </main>
    </div>
  )
}

export default Layout
