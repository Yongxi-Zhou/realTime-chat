import {useState} from 'react'

function useForm(initVal) {
    const [vals, setVals] = useState(initVal)
    return [
        vals,
        e => {
            setVals({
                ...vals,
                //key作为变量要用[]包裹
                [e.target.name]: e.target.value
            })
        }
    ]
}

export default useForm
