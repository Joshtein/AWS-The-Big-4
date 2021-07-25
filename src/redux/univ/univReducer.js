import {
  GET_UNIV_REQUEST,
  GET_UNIV_SUCCESS,
  GET_UNIV_FAILURE
} from './univTypes'
  
  const initialState = {
    loading: false,
    univData: {},
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_UNIV_REQUEST:
        return {
          ...state,
          loading: true
        }
      case GET_UNIV_SUCCESS:
        return {
          loading: false,
          univData: action.payload,
          error: ''
        }
      case GET_UNIV_FAILURE:
        return {
          loading: false,
          univData: {},
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer