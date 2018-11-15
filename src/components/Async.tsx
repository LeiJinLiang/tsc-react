import * as React from 'react'
/**
 *  data : [
 * { id : '1', name : '', info : {}}
 * ]
 */

export interface AsyncProps {
    data : any[]
}

const Async : React.SFC<AsyncProps> = props =>{
    const { data } = props
    return(
        <ul>
            {data.map((item,idx)=>(
                <li key = {idx}><strong>{item.id}</strong></li>
            ))}
        </ul>
    )
}

export default Async