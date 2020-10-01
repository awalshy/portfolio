import React from 'react'
import Head from 'next/head'

import Nav from './Nav'
import NavOtherPage from './NavOtherPages'

const Layout = ({
  children,
  title,
  dark,
  page,
  landingPage,
  setPage,
}: {
  title: string
  children
  dark?: boolean
  page?: number
  landingPage?: boolean
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
      {!landingPage && (
        <header>
          <NavOtherPage />
        </header>
      )}
      <main style={{ backgroundColor: dark ? '#1E2533' : '#E6E6E6' }}>
        {children}
      </main>
    </div>
  )
}

export default Layout
