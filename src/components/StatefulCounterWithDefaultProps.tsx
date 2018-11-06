/*
 * @Author: jinlei 
 * @Date: 2018-11-06 15:17:36 
 * @Last Modified by: jinlei
 * @Last Modified time: 2018-11-06 15:33:23
 */

 import * as React from 'react'

 export interface StatefulCounterWithDefaultProps {
     label : string;
     initialCount ?: number;
 }

 interface DefaultProps {
     readonly initialCount : number;
 }

 interface State {
     readonly count: number;
 }

 export const StatefulCounterWithDefaultProps:React.ComponentClass<StatefulCounterWithDefaultProps> = 
 class extends React.Component<StatefulCounterWithDefaultProps & DefaultProps>{
     static defaultProps: DefaultProps = {
        initialCount : 0
     }

     readonly state : State = {
        count : this.props.initialCount
     }

     componentWillReceiveProps ({initialCount} : StatefulCounterWithDefaultProps) {
         if(initialCount != null && initialCount !== this.props.initialCount){
            this.setState({ count : initialCount})
         }   
     }

     handleIncrement = () => {
        this.setState({ count : this.state.count + 1}) 
     }

     render() {
         const { handleIncrement } = this
         const { label } = this.props
         const { count } = this.state
         return(
            <div>
                <span>{label} ： { count}</span>
                <button type="button" onClick={handleIncrement}>
                    {`Increment`}
                </button>
            </div>    
         )
     }

 }