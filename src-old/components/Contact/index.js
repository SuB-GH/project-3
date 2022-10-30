import React, {useState} from 'react'
import { validateEmail } from '../../utils/helpers';

function Contact() {
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
        <div class="py-4 lg:py-8 relative">
            <div class="xl:mx-auto xl:container relative">
                <div class="flex flex-wrap xl:mx-auto xl:container">
                    <section class= "w-full lg:w-1/2 xl:pt-10 lg:pl-24">
                        <div class="flex flex-col items-start xl:justify start 2xl:justify-end xl:px-0 px-4">
                            <h2 class="text 2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-amber-600" >Tell Us What You Think!</h2> 
                            <form class="w-full 2xl:w-8/12 mt-3" onSubmit={handleSubmit}>
                                <div class="mt-4 md:mt-8">
                                    <label lass="text-gray-800 dark:text-white text-base font-medium">Name: </label>
                                    <input class="p-4 py-3 outline-none focus pr-10 bg-gray-100 border rounded border-gray-100 text-slate-600 lg:max-w-[410px] w-full leading-4"type="text" name="formname"/>
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <label lass="text-gray-800 dark:text-white text-base font-medium">Email:  </label>
                                    <input class="p-4 py-3 outline-none focus pr-10 bg-gray-100 border rounded border-gray-100 text-slate-600 lg:max-w-[410px] w-full leading-4"type="email" name="formname"/>
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <label lass="text-gray-800 dark:text-white text-base font-medium">Message: </label>
                                    <input class="p-4 py-3 outline-none focus pr-10 bg-gray-100 border rounded border-gray-100 text-slate-600 lg:max-w-[410px] w-full leading-4"type="text" name="formname"/>
                                </div>
                                {errorMessage && (
                                    <div> 
                                        <p name='formerror'>{errorMessage}</p>
                                    </div>
                                )}
                                <button class="bg-amber-600 text-white lg:max-w-[164px] font-medium px-6 py-4 w-full rounded-[4px] leading-[14px] hover:bg-amber-600"type='formsubmit'>Submit</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>            
    )
 }
export default Contact