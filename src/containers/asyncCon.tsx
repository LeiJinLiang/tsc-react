import * as React from 'react'
import { connect } from "react-redux"
import { Dispatch } from 'redux'
import {  AsyncStoreState } from '../types/async'
import * as actions from '../actions/async'
import Async from '../components/Async'

interface Props{
    ajax : ()=> void;
    data : any[] 
}

class AsyncCon extends React.Component<Props,any>{
    constructor(props:any){
        super(props)    
    }
    componentDidMount(){
      
       this.props.ajax()
    }
    render(){
        console.log('this',this.props) 
        return(
            <div>
                <Async data={[]} />
            </div>
        )
    }
}



const mapStateToProps = (state : AsyncStoreState) =>{
    return { data : state.payload}
}

const mapDispatchToProps = (dispatch : Dispatch<actions.RequestAction>) =>({
    ajax : ()=> actions.fetchData(dispatch)
})

const AsyncContainer = connect(mapStateToProps,mapDispatchToProps)(AsyncCon)

export default AsyncContainer