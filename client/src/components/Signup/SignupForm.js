
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;


























// import React, { useState, useEffect } from 'react';
// import { validateEmail } from '../../utils/helpers';
// import { Form, Button, Alert } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../../utils/mutations';
// import Auth from '../../utils/auth';

// const SignupForm = () => {
//   //set initial form state
//   const [userFormData, setUserFormData] = useState({ 
    
//     email: '', 
//     password: '' 
//   });

//   // set state for form validation
//   const [validated] = useState(false);
//   // set state for alert
//   const [showAlert, setShowAlert] = useState(false);

//   const [addUser, { error, data }] = useMutation(ADD_USER);

//   useEffect(() => {
//     if (error) {
//       setShowAlert(true);
//     } else {
//       setShowAlert(false);
//     }
//   }, [error]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     setUserFormData({
//       ...userFormData,
//       [name]: value 
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // check if form has everything (as per react-bootstrap docs)
//     // const form = event.currentTarget;
//     // if (form.checkValidity() === false) {
//     //   event.preventDefault();
//     //   event.stopPropagation();
//     // }

//     try {
//       const { data } = await addUser({
//         variables: { ...userFormData },
//       });

//       Auth.login(data.addUser.token);
//     } catch (err) {
//       console.error(err);
//     }

//     // setUserFormData({
      
//     //   email: '',
//     //   password: '',
//     // });
//   };
//   const [formState, setFormState] = useState({ email: '', password: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { email, password } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       console.log('Submit Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`A ${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };
//   return (
//     <div>
//       <div className='login-card'>
//         <h3>Sign Up Here:</h3>
//         <div className='login-section'>
//           <label htmlFor="email">Email address:</label>
//           <input type="login" name="email" defaultValue={email} onBlur={handleChange}/>
//         </div>
//         <div className='login-section'>
//           <label htmlFor="password">Password:</label>
//           <input type="login" name="password" defaultValue={password} onBlur={handleChange}/>
//         </div>
//         <div className='login-section'>
//           <label htmlFor="password">Confirm Password:</label>
//           <input type="login" name="password" defaultValue={password} onBlur={handleChange}/>
//         </div>
//         {errorMessage && (
//               <div>
//                 <p className="error-text">{errorMessage}</p>
//               </div>
//             )}
//         <button data-testid="button" type="submit" className='submit'>Submit</button>
//       </div>
  
//     <>
//       {/* This is needed for the validation functionality above */}
//       <div noValidate validated={validated.toString()} onSubmit={handleFormSubmit}>
//         {/* show alert if server response is bad */}
//         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
//           Something went wrong with your signup!
//         </Alert>

//         <Form.Group>
//           <Form.Label htmlFor='username'>Username</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Your username'
//             name='username'
//             onChange={handleInputChange}
//             value={userFormData.username}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor='email'>Email</Form.Label>
//           <Form.Control
//             type='email'
//             placeholder='Your email address'
//             name='email'
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor='password'>Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Your password'
//             name='password'
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={!(userFormData.username && userFormData.email && userFormData.password)}
//           type='submit'
//           variant='success'>
//           Submit
//         </Button>
//       </div>
//     </>
//     </div>
//   );
// };

// export default SignupForm;
