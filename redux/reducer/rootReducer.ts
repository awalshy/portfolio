import { combineReducers } from 'redux'

// Reducers
import darkThemeReducer from './darkThemeReducer'

const rootReducer = combineReducers({
  darkTheme: darkThemeReducer,
})

export default rootReducer
