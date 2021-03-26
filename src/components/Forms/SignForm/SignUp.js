import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleSignUpActionCreator } from '../../../store/actions/signUp';
import { GoogleSign } from '../../';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import LogoIcon from '../../../assets/images/logo.png';

const SignUp = ({setSignUp}) => {
  const {loading, success, failed} = useSelector(state => ({
    success: state.signUp.post.success,
    loading: state.signUp.post.loading,
    failed: state.signUp.post.failed
  }))
  
  const dispatch = useDispatch()

  return (
    <section className='signUp'>
      <div className='signUp-left'>
        <img src={LogoIcon} alt='logo' className='logo'/>
        { success ? <p className='success-text'>A letter has been sent to your mail. Please confirm your mail</p> :
        <>
        <div className='title-content'>
          <h1 className='title'>Create an account</h1>
          <div>* all fields must be filled</div>
        </div>
        <div className='title-descr'>User registration</div>
        <GoogleSign />
        <div className='line'>
          <div className='line-1'></div>
          <div className='line-text'>OR</div>
          <div className='line-2'></div>
        </div>
        <Formik
          initialValues={
            {
              first_name: '',
              last_name: '',
              email: '',
              password: '',
              confirmPassword: '',
              acceptTerms: false
            }
          }
          validationSchema={
            Yup.object().shape({
              first_name: Yup.string()
                .required('Required'),
              last_name: Yup.string()
                .required('Required'),
              email: Yup.string()
                .required('Required')
                .email('Invalid email').required('Required'),
              password: Yup.string()
                .min(6, 'Minimum 6 characters')
                .required('Required'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Confirm password')
                .required('Required'),
              acceptTerms: Yup.bool().oneOf([true], 'Check the box')
            })
          }
          onSubmit ={
            fields => {
             dispatch(handleSignUpActionCreator(fields))
            }
          } >
          {() => (
            <Form className='form'>
              <div className='fullname'>
                <div>
                  <div className='label'>* First Name</div>
                  <Field type="text" name="first_name" />
                  <ErrorMessage name="first_name" component="div" className='data-error'/>
                </div>
                <div>
                  <div className='label'>* Last Name</div>
                  <Field type="text" name="last_name" />
                  <ErrorMessage name="last_name" component="div" className='data-error'/>
                </div>
              </div>
              <div className='label'>* Email</div>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="div" className='data-error'/>
              <div className='password'>
                <div>
                  <div className='label'>* Password</div>
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" className='data-error'/>
                </div>
                <div>
                  <div className='label'>* Confirm Password</div>
                  <Field type="password" name="confirmPassword" />
                  <ErrorMessage name="confirmPassword" component="div" className='data-error'/>
                </div>
              </div>
              <div className='check-wrapper'>
                <Field type="checkbox" name="acceptTerms" className='check-input'/>
                <label htmlFor="acceptTerms" className="check">I agree all the Term, Privacy Policy</label>
              </div>
              <ErrorMessage name="acceptTerms" component="div" className='data-error'/>
              {loading ? 
                <div className='btn'>
                  <div className='loading'></div>
                </div>
              : failed ? <button className='btn' type='submit'>Repeat</button> :
              <button className='btn' type='submit'>SIGN UP</button> 
              }
            </Form>
          )}
        </Formik> 
        </>
      }
      </div>
      <div className='signUp-right'>
       <div className='content'>
        <h2 className='title'>Already have an Account?</h2>
        <p className='text'>Sign in to access your account</p>
        <button className='btn' onClick={() => setSignUp(false)}>SIGN IN</button>
       </div>
      </div>
    </section>
  )
}

export default SignUp
