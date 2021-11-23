import React, {useState, useEffect} from 'react';
import './App.css';
import useForm from './useForm'
import Hello from './Hello';
import useFetch from './useFetch';

function App() {
  // const [email, setEmail] = useState<string>("")
  // const [password, setPassword] = useState<string>("")
  
  const [values, handleChange] = useForm({email: "", password: ""})
  const [showHello, setShowHello] = useState(true)
  // const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))
  const [count, setCount] = useState(0)

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  const {data , loading} = useFetch(`http://numbersapi.com/${count}/trivia`) 

  return (
    <div className="App">
      {/* <button onClick = {() => {setShowHello(!showHello)} }>Toggle</button>
      {showHello && <Hello/>} */}
      <>
        <div>{loading? "Loading..." : data}</div>
        <div>{count}</div>
        <button onClick = {() => {setCount(count => count + 1)}}>+</button>
      </>
      <div>email</div>
      <input type = "text" name = "email" value = {values.email} onChange = {handleChange} />
      <div>password</div>
      <input type = "text" name = "password" value = {values.password} onChange = {handleChange} />

      {/* <input type = "text" value = {email} onChange = {e => {setEmail(e.target.value)}} />
      <input type = "text" value = {password} onChange = {e => {setPassword(e.target.value)}} /> */}
    </div>
  );
}

export default App;
