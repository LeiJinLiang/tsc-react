import { RequestAction } from "../actions/async"
import { AsyncStoreState } from "../types/async"
import { REQUEST_START, RECEIVE_DATA, ERR } from '../constants/async'

const AsyncReducer = (state:AsyncStoreState, action: RequestAction) => {
    switch(action.type){
        case REQUEST_START:
        return {...state, isFetching: true}
        case RECEIVE_DATA:
        return {...state, isFetching : false, fetched:true, payload:action.data}
        case ERR:
        return {...state, fetched:true, err : action.err}
        default :
        return state
    }
}

export default AsyncReducer