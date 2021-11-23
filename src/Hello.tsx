import React, {useEffect} from 'react'


function Hello() {
    useEffect(() => {
        console.log("hello is in");
        
        return () => {
            console.log("hello is out");
        }
    }, [])
    return (
        <div>
            Hello
        </div>
    )
}

export default Hello
