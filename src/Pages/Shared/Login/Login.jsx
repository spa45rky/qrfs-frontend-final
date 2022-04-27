import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlackLogo from '../../../Assets/Images/Logos/qrfs-black-small 1.png';


export const Login = ({ Header, Logo }) => {

    Header = Header || "DEFAULT"
    Logo = Logo || BlackLogo


    return(
        <Container fluid className='login'>
            <Row className='mt-5'>
                <h2>{Header}</h2>
            </Row>
            <Row className='d-flex flex-column justify-content-center align-items-center mt-5'>
                <div className='login-container'>
                    <img src={Logo} className="login-logo"/>
                    <div className='login-form'>
                        <div className='top-row'>
                            <span className='heading-text'>Sign In</span>
                            <Link to="#" className='small-text'>Forgot password?</Link>
                        </div>
                        <div className='form-row'>
                            
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}