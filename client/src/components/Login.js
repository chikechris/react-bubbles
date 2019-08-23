import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FormStyle = styled.div`
  body {
    max-width: 100%;
    
  }
  form {
    display: flex;
    max-width: 100%;
    height: 100%;
    margin:  auto;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    
  }

  input {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 4%;
    font-family: 'Serif ', 'Georgia ';
    margin: 5px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #282c34;
    padding: 10px;
    color: 'white';
    width: 100%;
  }
  button {
    background: #282c34;
    text-align: center;
    padding: 5px;
    margin-top: 10px;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`

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

      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <FormStyle>
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
      </FormStyle>
    </>
  )
}

export default Login
