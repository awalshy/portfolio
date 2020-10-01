import { DARK, LIGHT } from '../actions/darkThemeActions'

const darkThemeReducer = (state = { value: false }, action) => {
  switch (action.type) {
    case DARK:
      return { ...state, value: true }
    case LIGHT:
      return { ...state, value: false }
    default:
      return { ...state }
  }
}

export default darkThemeReducer
