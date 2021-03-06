import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WhiteLogo from '../../../Assets/Images/Logos/qrfs-white-small.svg';
import EmailIcon from '../../../Assets/Images/icons/email1.svg';
import PasswordIcon from '../../../Assets/Images/icons/password1.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../../../Services/Redux/reducers/authSlice';
import { toast } from 'react-toastify';

export const Login = ({ Logo }) => {

    Logo = Logo || WhiteLogo

    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user) {
            toast.success('Logged In!')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: pass
        }


        toast.success('Logged in!')
        dispatch(login(userData))
    }

    return(
        <Container fluid className='login'>
            <Row className='d-flex flex-column justify-content-center align-items-center'>
                <div className='login-container'>
                    <img src={Logo} className="login-logo"/>
                    <div className='login-form'>
                        <div className='top-row d-flex justify-content-between mb-3'>
                            <span className='heading-text mb-1'>Sign In</span>
                            <Link to="#" className='small-text mt-2'>Forgot password?</Link>
                        </div>
                        <div className='form-row'>
                            <Form onSubmit={handleSubmit}>
                                <InputGroup className='mb-3' controlId="email">
                                    <InputGroup.Text className='login-icon'><img src={EmailIcon}/></InputGroup.Text>
                                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Enter your email" className='login-input'/>
                                </InputGroup>
                                <InputGroup className='' controlId="password">
                                    <InputGroup.Text className='login-icon'><img src={PasswordIcon}/></InputGroup.Text>
                                    <Form.Control value={pass} onChange={(e) => setPass(e.target.value)} required type="password" placeholder="Enter your password" className='login-input'/>
                                </InputGroup>
                                <Button type="submit" className="login-btn">Sign In</Button>
                            </Form>
                        </div>
                    </div>
                    <div className='lower-row'>
                        <div className='google-btn'></div>
                        <h6 className='forget-password m-3'>Don't have an account? <Link to="/register" className='form-hyperlink'>Sign Up!</Link></h6>
                    </div>
                </div>
            </Row>
        </Container>
    )
}