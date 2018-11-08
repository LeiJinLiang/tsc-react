import * as React from 'react'

export interface Props {
    name : string;
    enthusiasmLevel?: number;
    onIncrement?: ()=> void;
    onDecrement?: ()=> void;
}


interface defaultProps {
    readonly enthusiasmLevel: number;
}


const getExclamationMarks = (numberCharts : number) => (
    Array(numberCharts+1).join('!')
)

const Hello : React.ComponentClass<Props> = 
class extends  React.Component<Props & defaultProps> {
    static defaultProps: defaultProps = {
        enthusiasmLevel : 1
     }
    render() {
        const { name , enthusiasmLevel, onDecrement , onIncrement } = this.props
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