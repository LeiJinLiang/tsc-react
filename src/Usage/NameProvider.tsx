import * as React from 'react'

import { NameProvider } from '../components/NameProvider'

export default () => (
    <NameProvider>
        {({name})=>(
            <div>{name}</div>
        )}
    </NameProvider>
)