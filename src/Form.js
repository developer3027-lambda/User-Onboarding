import React from 'react';
import Formik from 'formik';

- Name
- Email
- Password
- Terms of Service (checkbox)
- A Submit button to send our form data to the server.

function Form() {
    return(
        <div>
            <form>
                <label htmlFor='name'>
                    <Field type='text' id='name' name='name'  />
                </label>
                <label htmlFor='email'>
                    <Field type='email' id='email' name='eamil'  />
                </label>
                <label htmlFor='service'>
                    <Field type='checkbox' id='service' name='service'  />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};
export default Form