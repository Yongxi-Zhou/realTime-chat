import React, {useState, useEffect} from 'react';
import './App.css';
import useForm from './useForm'

function App() {
  // const [email, setEmail] = useState<string>("")
  // const [password, setPassword] = useState<string>("")
  
  const [values, handleChange] = useForm({email: "", password: ""})

  useEffect(() => {
    console.log("render");
  }, [values.password])

  return (
    <div className="App">
      <input type = "text" name = "email" value = {values.email} onChange = {handleChange} />
      <input type = "text" name = "password" value = {values.password} onChange = {handleChange} />

      {/* <input type = "text" value = {email} onChange = {e => {setEmail(e.target.value)}} />
      <input type = "text" value = {password} onChange = {e => {setPassword(e.target.value)}} /> */}
    </div>
  );
}

export default App;
