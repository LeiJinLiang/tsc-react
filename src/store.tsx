import { createStore } from 'redux'
import { enthusiasm } from './reducers'
import { StoreState } from './types'

export const store = createStore<StoreState,any,any,any>(enthusiasm,{
    enthusiasmLevel : 1,
    languageName : 'Typescript'
})