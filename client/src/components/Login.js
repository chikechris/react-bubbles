import React from 'react'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
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
        <input
          type='password'
          name='password'
          value={input.username}
          onChange={handleChange}
        />
        <div>
          <Button> Login </Button>
        </div>
      </form>
    </>
  )
}

export default Login
