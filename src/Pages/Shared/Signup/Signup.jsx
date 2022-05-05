import React, { useEffect } from 'react';
import { Container, Row, Form, Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WhiteLogo from '../../../Assets/Images/Logos/qrfs-white-small.svg';
import EmailIcon from '../../../Assets/Images/icons/email1.svg';
import PasswordIcon from '../../../Assets/Images/icons/password1.svg';
import axios from 'axios';


export const Signup = ({ Logo }) => {
    Logo = Logo || WhiteLogo


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
                            <Form>
                                <Row className=''>
                                    <Form.Group as={Col}>
                                        <Form.Label className='register-form-text'>First Name</Form.Label>
                                        <Form.Control required className='register-input' type="text"/>
                                    </Form.Group>
                                    <Form.Group required as={Col}>
                                        <Form.Label className='register-form-text'>Last Name</Form.Label>
                                        <Form.Control required className='register-input' type="text" />
                                    </Form.Group>
                                </Row>
                                <Form.Group>
                                    <Form.Label className='register-form-text'>Email</Form.Label>
                                    <Form.Control required className='register-input' type="email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='register-form-text'>Create a password</Form.Label>
                                    <Form.Control required className='register-input' type="password"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='register-form-text'>Confirm password</Form.Label>
                                    <Form.Control required className='register-input' type="password" />
                                </Form.Group>
                                <Button type="submit" className="login-btn">Sign Up</Button>
                            </Form>
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