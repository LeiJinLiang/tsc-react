import * as React from 'react'

export interface AsyncProps {
    data : []
}

const Async : React.SFC<AsyncProps> = props =>{
    const { data } = props
    return(
        <ul>
            {data.map((item,idx)=>(
                <li key = {idx}><strong>{2222}</strong></li>
            ))}
        </ul>
    )
}

export default Async