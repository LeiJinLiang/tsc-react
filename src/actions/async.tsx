import axios from 'axios'
import * as constants from "../constants/async"

const url = 'http://rest.learncode.academy/api/reacttest/tweets'

export const fetchData = (dispatch:any) => {
    dispatch({ type: constants.REQUEST_START})
    axios.get(url)
        .then((resp)=>{
            dispatch({ type : constants.RECEIVE_DATA, resp})
        })
        .catch((err)=>{
            dispatch({ type : constants.ERR, err : err})
        })
}

export interface requestStart {
    type : constants.REQUEST_START
}

export interface receiveData {
    type : constants.RECEIVE_DATA
}

export interface requestErr {
    type : constants.ERR
}



export type RequestAction = requestStart | receiveData | requestErr | any
