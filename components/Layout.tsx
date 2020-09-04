import React from 'react'
import Head from 'next/head'

const Layout = ({
  children,
  title,
  dark,
}: {
  title: string
  children
  dark: boolean
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
      <main style={{ backgroundColor: dark ? '#1E2533' : '#E6E6E6' }}>
        {children}
      </main>
    </div>
  )
}

export default Layout
