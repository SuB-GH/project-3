import React, {useState} from 'react'
import { validateEmail } from '../../utils/helpers';

function ContactFrom() {
    const[formState, setFormState] = useState({ name: '', email: '', message: ''})

    const [errorMessage, setErrorMessage] = useState('')
    const {name, email, message} = formState

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!errorMessage) {
            console.log('Submit Form', formState)
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('Your email is not valid.')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    }
    return (
        <section>
            <h2>Tell Us What You Think!</h2> 
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="formname"/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="formname"/>
                </div>
                <div>
                    <label>Message:</label>
                    <input type="text" name="formname"/>
                </div>
                {errorMessage && (
                    <div> 
                        <p name='formerror'>{errorMessage}</p>
                    </div>
                )}
                <button type='formsubmit'>Submit</button>
            </form>
        </section>
    )
 }