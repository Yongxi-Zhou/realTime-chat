import React from 'react'
import {useCountRenders} from './useCountRenders'

interface props {
    increment: (n: number) => void
    n: number
}
export const Square : React.FC<props> = React.memo(({increment, n}) => {
    useCountRenders()
    return <button onClick = {()=>increment(n)} >{n}</button>;
})
