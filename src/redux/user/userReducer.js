import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  UPDATE_USER_ID
} from './userTypes'
  
  const initialState = {
    loading: false,
    userData: {},
    userId: '',
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case GET_USER_SUCCESS:
        return {
          loading: false,
          userData: action.payload,
          error: ''
        }
      case GET_USER_FAILURE:
        return {
          loading: false,
          userData: {},
          error: action.payload
        }
      case UPDATE_USER_ID:
          return {
            ...state,
            userId: action.payload
          }
      default: return state
    }
  }
  
  export default reducer