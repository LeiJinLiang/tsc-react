/*
 * @Author: jinlei 
 * @Date: 2018-11-07 11:11:27 
 * @Last Modified by: jinlei
 * @Last Modified time: 2018-11-07 11:14:54
 */

 /**
  *  Render Props
  */

import * as React from 'react'

interface NameProviderProps {
    children : (state : NameProviderState) => React.ReactNode;
}

interface NameProviderState{
    readonly name : string;
}

export class NameProvider extends React.Component<NameProviderProps, NameProviderState> {
    readonly state : NameProviderState = {
        name : 'Pitor'
    }

    render() {
        return this.props.children(this.state)
    }
}