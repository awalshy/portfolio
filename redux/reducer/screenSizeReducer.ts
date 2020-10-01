import { RESIZE } from '../actions/screenSizeActions'

const screenSizeReducer = (state = { width: 0 }, action) => {
  if (action.type === RESIZE) return { ...state, width: action.value }
  return { ...state }
}

export default screenSizeReducer
