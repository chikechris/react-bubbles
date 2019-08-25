import React, { useState } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormStyle = styled.div`
  body {
    width: 100%;
    height: 100%;
    margin-top: 10%;
    transform: translateY(-20%);
    position: absolute;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  form {
    display: flex;
    max-width: 50%;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 30px;
    border-radius: 5px;
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
    width: 80%;
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
  p {
    text-align: center;
    color: blue;
  }
`;

function Login({ errors, touched, status, props }) {
  return (
    <FormStyle>
      <div className='form-module'>
        <Form className='loginForm'>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field
            className='zr_un_email valid'
            type='username'
            name='username'
            placeholder='username'
          />

          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type='password' name='password' placeholder='Password' />

          <button type='submit'>Sign In</button>
          <p>
            Don't have an account?
            <Link to='../Sign-Up Form'>
              <br />
              <button>Sign Up </button>
            </Link>
          </p>
        </Form>
        <div></div>
      </div>
    </FormStyle>
  );
}
const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(5)
      .required('User Name is required'),
    password: Yup.string()
      .min(8)
      .required('Password is required'),
  }),
  handleSubmit(values, { resetForm, setStatus, props }) {
    console.log(values);
    axios
      .post('http://localhost:5000/api/login', values)
      .then(res => {
        console.log('login Payload', res.data.payload);
        setStatus(res.data.payload);
        resetForm();

        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblePage');
      })
      .catch(err => console.log(err.response));
  },
})(Login);

export default FormikLoginForm;
