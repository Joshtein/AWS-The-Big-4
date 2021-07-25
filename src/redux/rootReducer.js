import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import univReducer from './univ/univReducer'

const UPDATE_STATUS_LOGGED_IN = 'UPDATE_STATUS_LOGGED_IN'

const initialState = false

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATUS_LOGGED_IN:
      return action.payload
    default: return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  univ: univReducer,
  statusLoggedIn: statusReducer
})

export default rootReducer