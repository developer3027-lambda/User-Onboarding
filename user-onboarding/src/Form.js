import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import './FormCSS.css';

const TeamForm = ({values, touched, errors, status}) => {
    const [Member, setMember] = useState([])
    useEffect(() => {
        status && setMember(Member => [...Member, status])
    },[status])
    return (
        <div className='wrapper'>
            <Form>
                <label htmlFor='name'>Name</label>
                <Field 
                id='name'
                type='input'
                name='name'
                placeholder='Full Name' />
                {touched.name && errors.name && (
                <p className="error">{errors.name}</p>)}

                <label htmlFor='email'>Email</label>
                <Field
                id='email'
                type='email'
                name='email'
                placeholder='Email' />
                {touched.email && errors.email && (
                <p className="error">{errors.email}</p>)}

                <label htmlFor='password'>Password</label>
                <Field
                id='password'
                type='password'
                name='password'
                placeholder='Password' />
                
                <label htmlFor='course'>Course</label>
                <Field
                id='course'
                name='course'
                component='select'>
                    <option>Your Focus</option>
                    <option value='andriod'>Andriod Development</option>
                    <option value='ios'>IOS Development</option>
                    <option value='uxdesign'>UX Design</option>
                    <option value='ror'>Ruby On Rails</option>
                    <option value='data'>Data Science</option>
                    <option value='fullstack'>Full Stack Web Dev</option>
                    <option value='javaback'>Java Backend Dev</option>
                    <option value='success'>Principles of Success</option>
                    <option value='career'>Career Readiness</option>
                </Field>
                
                <label htmlFor='tos'>Terms of Service</label>
                <Field
                id='tos'
                type='checkbox'
                name='tos'
                checked={values.tos} />
                
                <button>Submit</button>
            </Form>
            {Member.map(item => (
                <ul key={item.id}>
                  <li>Name: {item.name}</li>
                  <li>Email: {item.email}</li>
                  <li>Course: {item.course}</li>
                  <li>Term of Service: {item.tos}</li>
                </ul>
              ))}
        </div>
    );
}


const FormikForm = withFormik({
    mapPropsToValues({name, email, password, course, tos}) {
        return {
          name: name || '',
          email: email || '',
          password: password || '',
          course: course || '',
          tos: tos || false
        };
      },
      validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required()          
      }),
    handleSubmit(values, {setStatus}) {
        axios.post('https://reqres.in/api/users/', values)
        .then(res => {setStatus(res.data)})
        .catch(err => console.log(err.response));
    }
})(TeamForm);
export default FormikForm;
