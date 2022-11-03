// see SignupForm.js for comments
import React, { useState } from 'react';
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

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className='login-card'>
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
    </form>
  );
};

export default LoginForm;











