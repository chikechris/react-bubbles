import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import FormStyle from './FormStyle';

function Login({ errors, touched }) {
  return (
    <FormStyle>
      <div>
        <Form>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type='username' name='username' placeholder='username' />

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
