import axios from 'axios'
import { Dispatch } from 'redux'
import * as constants from "../constants/async"

const url = 'http://rest.learncode.academy/api/reacttest/tweets'

export type ajaxType = (dispatch:Dispatch)=> void



export const fetchData:ajaxType = (dispatch:Dispatch<RequestAction>) => {
    dispatch({ type: constants.REQUEST_START})
    axios.get(url)
        .then((resp)=>{
            dispatch({ type : constants.RECEIVE_DATA, data:resp.data})
        })
        .catch((err)=>{
            dispatch({ type : constants.ERR, err : err})
        })
}

export interface requestStart {
    type : constants.REQUEST_START
}

export interface receiveData {
    type : constants.RECEIVE_DATA,
    data : any[]
}

export interface requestErr {
    type : constants.ERR,
    err : Error
}



export type RequestAction = requestStart | receiveData | requestErr 
