/*
 * @Author: jinlei 
 * @Date: 2018-11-06 14:56:45 
 * @Last Modified by: jinlei
 * @Last Modified time: 2018-11-06 15:04:40
 */

import * as React from "react"

export interface StatefulCounterProps {
    label : string;
}

interface State {
    readonly count : number;
}

export class StatefulCounter extends React.Component<StatefulCounterProps, State> {
    readonly state:State= {
        count : 0
    }

    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        const { handleIncrement } = this
        const { count } = this.state
        const { label } = this.props
        return(
            <div>
                 <span>{label} : {count}</span>
                <button type='button' onClick={handleIncrement}>{`Increment`}</button>
            </div>
        )
    }
}