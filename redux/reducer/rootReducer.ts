import { combineReducers } from 'redux'

// Reducers
import darkThemeReducer from './darkThemeReducer'
import screenSizeReducer from './screenSizeReducer'

const rootReducer = combineReducers({
  darkTheme: darkThemeReducer,
  screenSize: screenSizeReducer,
})

export default rootReducer
