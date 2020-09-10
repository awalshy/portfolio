import ReactGA from 'react-ga'

export const initGA = (trackID) => {
  ReactGA.initialize(trackID, {
    // 'testMode': true,
    // debug: true
  })
}

export const pageGA = (pageName) => {
  ReactGA.pageview(pageName)
}
