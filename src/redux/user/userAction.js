import { userGet } from  '../../AWSDependencies/api'
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from './userTypes'

export const getUserData = (id) => {
  return (dispatch) => {
    dispatch(getUserDataRequest())
    console.log(id);
    const getUserDataApi = async () => {
        const dataSent = {
            "userID": id
        }
        const res = await userGet(dataSent);
        console.log(res);
        if(res){
            const userData = res.body.Item
            dispatch(getUserDataSuccess(userData))
        }
        else{
            dispatch(getUserDataFailure(res.body.Item.message))
        };
    }
    getUserDataApi();
  }
}

export const getUserDataRequest = () => {
  return {
    type: GET_USER_REQUEST
  }
}

export const getUserDataSuccess = userData => {
  return {
    type: GET_USER_SUCCESS,
    payload: userData
  }
}

export const getUserDataFailure = error => {
  return {
    type: GET_USER_FAILURE,
    payload: error
  }
}