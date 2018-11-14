import * as React from 'react'
import { connect } from "react-redux"
import { Dispatch } from 'redux'
import {  AsyncStoreState } from '../types/async'

class AsyncCon extends React.Component{

}



const mapStateToProps = (state : AsyncStoreState) =>{
    return { data : state.payload}
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return { }
}

const AsyncContainer = connect(mapStateToProps,mapDispatchToProps)(AsyncCon)

export default AsyncContainer