/*
 * @Author: jinlei 
 * @Date: 2018-11-06 14:40:52 
 * @Last Modified by: jinlei
 * @Last Modified time: 2018-11-06 14:52:30
 */
import * as React from 'react'

export interface SFCCounterProps {
    lable : string;
    count : number;
    onIncrement : any;
}

export const SFCCounter : React.SFC<SFCCounterProps> = (props) => {
    const {lable, count, onIncrement} = props
    return (
        <div>
            <span>{lable} : {count}</span>
            <button type='button' onClick={onIncrement}>{`Increment`}</button>
        </div>
    )
}