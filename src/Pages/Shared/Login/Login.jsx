import React, { useEffect } from 'react';
import { Container, Row, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WhiteLogo from '../../../Assets/Images/Logos/qrfs-white-small.svg';
import EmailIcon from '../../../Assets/Images/icons/email1.svg';
import PasswordIcon from '../../../Assets/Images/icons/password1.svg';
import axios from 'axios';


export const Login = ({ Header, Logo }) => {

    Header = Header || "DEFAULT"
    Logo = Logo || WhiteLogo


    // useEffect(() => {
    //     axios.get('http://localhost:3002/login').then((res) => {
    //         console.log(res)
    //     })
    // }, [])


    return(
        <Container fluid className='login'>
            <Row>
                <h2 className='mt-5'>{Header}</h2>
            </Row>
            <Row className='d-flex flex-column justify-content-center align-items-center mt-5'>
                <div className='login-container'>
                    <img src={Logo} className="login-logo"/>
                    <div className='login-form'>
                        <div className='top-row d-flex justify-content-between mb-3'>
                            <span className='heading-text mb-1'>Sign In</span>
                            <Link to="#" className='small-text mt-2'>Forgot password?</Link>
                        </div>
                        <div className='form-row'>
                            <Form>
                                <InputGroup className='mb-3' controlId="email">
                                    <InputGroup.Text className='login-icon'><img src={EmailIcon}/></InputGroup.Text>
                                    <Form.Control required type="email" placeholder="Enter your email" className='login-input'/>
                                </InputGroup>
                                <InputGroup className='' controlId="password">
                                    <InputGroup.Text className='login-icon'><img src={PasswordIcon}/></InputGroup.Text>
                                    <Form.Control required type="password" placeholder="Enter your password" className='login-input'/>
                                </InputGroup>
                                <Button type="submit" className="login-btn">Sign In</Button>
                            </Form>
                        </div>
                    </div>
                    <div className='lower-row'>
                        <div className='google-btn'></div>
                        <p className='forget-password'>Don't have an account? <Link to="">Sign Up!</Link></p>
                    </div>
                </div>
            </Row>
        </Container>
    )
}