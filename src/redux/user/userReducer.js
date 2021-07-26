import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  UPDATE_REC_PARAMS
} from './userTypes'
  
  const initialState = {
    loading: false,
    userData: {},
    recommendParams: {
      updated: false,
      reRender: false,
      majorName: "",
      universityName: "",
      budget: 0
    },
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
          ...state,
          loading: false,
          userData: action.payload,
          error: ''
        }
      case GET_USER_FAILURE:
        return {
          ...state,
          loading: false,
          userData: {},
          error: action.payload
        }
      case UPDATE_REC_PARAMS:
        return {
          ...state,
          recommendParams: action.payload
        }
      default: return state
    }
  }
  
  export default reducer