import { getUnivData } from  '../../AWSDependencies/api'
import {
  GET_UNIV_REQUEST,
  GET_UNIV_SUCCESS,
  GET_UNIV_FAILURE
} from './univTypes'

export const getUniversityData = (univName) => {
  return (dispatch) => {
    dispatch(getUnivDataRequest())
    console.log(univName);
    const getUnivDataApi = async () => {
        const dataSent = {
          "universityName": univName
        }
        const res = await getUnivData(dataSent);
        console.log(res);
        if(res){
            const univData = res
            dispatch(getUnivDataSuccess(univData))
        }
        else{
            dispatch(getUnivDataFailure(res.body.Item.message))
        };
    }
    getUnivDataApi();
  }
}

export const getUnivDataRequest = () => {
  return {
    type: GET_UNIV_REQUEST
  }
}

export const getUnivDataSuccess = univData => {
  return {
    type: GET_UNIV_SUCCESS,
    payload: univData
  }
}

export const getUnivDataFailure = error => {
  return {
    type: GET_UNIV_FAILURE,
    payload: error
  }
}