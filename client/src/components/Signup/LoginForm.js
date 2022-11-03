// see SignupForm.js for comments
import React, { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/helpers';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = () => {
  const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
 


  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginFormState({...loginFormState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...loginFormState }
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setLoginFormState({
      email: '',
      password: '',
    });
  };

  const handleBlur = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='login-card'>
        <h3>Log-In</h3>
        <div className='login-section'>
          <label htmlFor="email">Email address:</label>
          <input type="login" name="email" value={loginFormState.email} onBlur={handleBlur} onChange={handleChange}/>
        </div>
        <div className='login-section'>
          <label htmlFor="password">Password:</label>
          <input type="login" name="password" value={loginFormState.password} onBlur={handleBlur} onChange={handleChange}/>
        </div>
        {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
        <button data-testid="button" type="submit" className='submit'>Submit</button>
      </div>
    </form>
    // <>
    //   <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
    //     <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
    //       Something went wrong with your login credentials!
    //     </Alert>
    //     <Form.Group>
    //       <Form.Label htmlFor='email'>Email</Form.Label>
    //       <Form.Control
    //         type='text'
    //         placeholder='Your email'
    //         name='email'
    //         onChange={handleInputChange}
    //         value={userFormData.email}
    //         required
    //       />
    //       <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
    //     </Form.Group>

    //     <Form.Group>
    //       <Form.Label htmlFor='password'>Password</Form.Label>
    //       <Form.Control
    //         type='password'
    //         placeholder='Your password'
    //         name='password'
    //         onChange={handleInputChange}
    //         value={userFormData.password}
    //         required
    //       />
    //       <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
    //     </Form.Group>
    //     <Button
    //       disabled={!(userFormData.email && userFormData.password)}
    //       type='submit'
    //       variant='success'>
    //       Submit
    //     </Button>
    //   </Form>
    // </>
  );
};

export default LoginForm;
