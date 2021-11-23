import React, {useEffect, useRef} from 'react'


function Hello() {
    useEffect(() => {
        console.log("hello is in");
        return () => {
            console.log("hello is out");
        }
    }, [])

    const renders = useRef(0)
    console.log("hello renders",renders.current++);

    return (
        <div>Hello</div>
    )
}

export default Hello
