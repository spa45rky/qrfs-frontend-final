import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WhiteLogo from '../../../Assets/Images/Logos/qrfs-white-small.svg';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../../../Services/Redux/reducers/authSlice';
import { toast } from 'react-toastify';


export const Signup = ({ Logo }) => {
    Logo = Logo || WhiteLogo

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user) {
            toast.success('Registered!')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string()
        .min(2, 'First Name is too short!')
        .max(50, 'First Name is too long!')
        .required('Required'),
        lastName: Yup.string()
        .min(2, 'Last Name is too short!')
        .max(50, 'Last Name is too long!')
        .required('Required'),
        email: Yup.string().email('Invalid Email!').required('Required'),
        password: Yup.string()
        .min(2, 'Password is too short!')
        .max(50, 'Password is too long!')
        .required('Required'),
        confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match!')
    })


    const handleSubmit = (e) => {
        const userData = {
            ...e
        }
        toast.success("HURRAH!")
        dispatch(register(userData))
    }

    if(isLoading) {
        return null
    }

    return(
        <Container fluid className='login'>
            <Row className='d-flex flex-column justify-content-center align-items-center'>
                <div className='login-container'>
                    <img src={Logo} className="login-logo"/>
                    <div className='login-form'>
                        <div className='top-row d-flex justify-content-between mb-3'>
                            <span className='heading-text mb-1'>Create an account</span>
                        </div>
                        <div className='form-row'>
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    password: '',
                                    confirmPassword: ''
                                }}
                                validationSchema={RegisterSchema}
                                onSubmit={handleSubmit}
                            >
                            {({
                                handleSubmit,
                                handleChange,
                                values,
                                errors,
                                touched,
                                isValid
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                <Row className=''>
                                    <Form.Group as={Col} controlId="validationFormik01">
                                        <Form.Label className='register-form-text'>First Name</Form.Label>
                                        <Form.Control
                                        required 
                                        className='register-input' 
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isValid={touched.firstName && !errors.firstName}
                                        />
                                        <Form.Control.Feedback>{errors.firstName}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group required as={Col} controlId="validationFormik02">
                                        <Form.Label className='register-form-text'>Last Name</Form.Label>
                                        <Form.Control 
                                        required 
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isValid={touched.lastName && !errors.lastName}
                                        className='register-input' 
                                        type="text" />
                                    </Form.Group>
                                </Row>
                                <Form.Group controlId="validationFormik03">
                                    <Form.Label className='register-form-text'>Email</Form.Label>
                                    <Form.Control 
                                    required 
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    className='register-input' 
                                    type="email" />
                                </Form.Group>
                                <Form.Group controlId="validationFormik04">
                                    <Form.Label className='register-form-text'>Create a password</Form.Label>
                                    <Form.Control 
                                    required 
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    className='register-input' 
                                    type="password"/>
                                </Form.Group>
                                <Form.Group controlId="validationFormik05">
                                    <Form.Label className='register-form-text'>Confirm password</Form.Label>
                                    <Form.Control 
                                    required 
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    isValid={touched.confirmPassword && !errors.confirmPassword}
                                    className='register-input' 
                                    type="password"
                                    
                                    />
                                </Form.Group>
                                <Button type="submit" className="login-btn">Sign Up</Button>
                            </Form>
                            )}
                            </Formik>
                        </div>
                    </div>
                    <div className='lower-row'>
                        <div className='google-btn'></div>
                        <p className='t-and-c m-3'>By creating an account, you agree to the Terms of Service</p>
                        <h6 className='forget-password'>Already have an account? <Link to="/login" className='form-hyperlink'>Sign In!</Link></h6>
                    </div>
                </div>
            </Row>
        </Container>
    )
}