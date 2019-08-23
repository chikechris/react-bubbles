import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [input, setInput] = useState({
    username: ' ',
    paasword: ' '
  })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  console.log(input)

  const handleSubmit = e => {
    e.preventDefault()
    console.log('test')
    axios
      .post('http://localhost:5000/api/login', input)
      .then(res => console.log(res.data))
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>User Name</h2>
        <input
          type='text'
          name='username'
          value={input.username}
          onChange={handleChange}
        />
        <h2>Password</h2>
        <input
          type='password'
          name='password'
          value={input.password}
          onChange={handleChange}
        />
        <div>
          <button> Login </button>
        </div>
      </form>
    </>
  )
}

export default Login;
