import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import useForm from './useForm'
import Hello from './Hello';
import useFetch from './useFetch';

function App() {
  const [values, handleChange] = useForm({email: "", password: ""})
  const [showHello, setShowHello] = useState(true)
  const [count, setCount] = useState<number>(() => JSON.parse(localStorage.getItem("count")!))

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  const {data , loading} = useFetch(`http://numbersapi.com/${count}/trivia`) 

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="App">
      <button onClick = {() => {setShowHello(!showHello)} }>Toggle</button>
      {showHello && <Hello/>}
      <>
        <div>{loading? "Loading..." : data}</div>
        <div>{count}</div>
        <button onClick = {() => {setCount(count => count + 1)}}>+</button>
        <button onClick = {() => {setCount(count => count - 1)}}>-</button>
      </>
      <div>email</div>
      <input ref = {inputRef} type = "text" name = "email" value = {values.email} onChange = {handleChange} />
      <div>password</div>
      <input type = "text" name = "password" value = {values.password} onChange = {handleChange} />
      <button onClick = {() => {inputRef.current!.focus()}}>focus</button>
    </div>
  );
}

export default App;
