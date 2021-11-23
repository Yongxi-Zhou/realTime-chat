import React, {FC, useEffect, useRef} from 'react'
import {useCountRenders} from './useCountRenders'

interface props {
    increment: (n: number) => void
}
export const Hello : React.FC<props> = React.memo(({increment}) => {
    useCountRenders()
    return <button onClick = {()=>increment(5)} >hello</button>;
})
