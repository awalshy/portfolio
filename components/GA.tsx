import ReactGA from 'react-ga'

export const GAInit = (trackID) => {
  ReactGA.initialize(trackID, {
    // 'testMode': true,
    debug: true,
  })
}

export const GAPage = (pageName) => {
  ReactGA.pageview(pageName)
}

export const GAEvent = (category: string, action: string) => {
  ReactGA.event({
    category,
    action,
    nonInteraction: false,
  })
}
