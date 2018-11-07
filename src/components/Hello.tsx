import * as React from 'react'

export interface Props {
    name : string;
    enthusiasmLevel?: number;
    onIncrement?: ()=> void;
    onDecrement?: ()=> void;
}

const getExclamationMarks = (numberCharts : number) => (
    Array(numberCharts+1).join('!')
)

class Hello extends React.Component<Props> {
    constructor(props : Props){
        super(props)
    }
    render() {
        const { name , enthusiasmLevel = 1, onDecrement , onIncrement } = this.props
        return(
            <div className='hello'>
                <div className='greeting'>
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        )
    }
}


export default Hello