import React from 'react'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'

import '../css/tailwind.css'
import { useStore } from '../redux/store'

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initalReduxState)

  return (
    <Provider store={store}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Provider>
  )
}

export default MyApp
