import React from 'react';
import './FormCSS.css';

const Form = () => {

    return (
        <div className='wrapper'>
            <form>
                <label htmlFor='name'>Name</label>
                <input 
                id='name'
                type='input'
                name='name'
                placeholder='Full Name' />

                <label htmlFor='email'>Email</label>
                <input
                id='email'
                type='email'
                name='email'
                placeholder='email' />

                <label htmlFor='password'>Password</label>
                <input
                id='password'
                type='password'
                name='password'
                placeholder='password' />

                <label htmlFor='tos'>Terms of Service</label>
                <input
                id='tos'
                type='checkbox'
                name='tos'
                placeholder='tos' />

                <button>Submit</button>
            </form>
        </div>
    );
}
export default Form;