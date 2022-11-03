import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (e) => {
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
      
      console.log(formState.name);
      console.log(formState.email);
      console.log(formState.message);
    }
  };

  const handleSubmit = (e) => {
    window.location `mailto:jathompson399@gmail.com?subject=message from ${formState.name}&body=${formState.message}`
  }


  return (
    <section>
      <div className='contact-card'>
        <h1 data-testid="h1tag">Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className='contact-section'>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div className='contact-section'>
              <label htmlFor="email">Email address:</label>
              <input type="text" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className='contact-section'>
              <label htmlFor="message">Message:</label>
              <textarea id='form-textbox' name="message" rows="10" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button data-testid="button" type="submit" className='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
}


export default Contact;