import React from 'react';
import { Container, DropdownButton, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../../Assets/Images/icons/back-arrow.svg';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';



export const CreateCustomer = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        const customerData = {
            ...e
        }

        const response = await axios.post("http://localhost:3002/superadmin/customers/add", customerData)
        if (response.data) {
            console.log(response.data)
        }
    }

    const customerSchema = Yup.object().shape({
        title: Yup.string()
            .min(2)
            .required(),
        email: Yup.string()
            .email()
            .required(),
        adminEmail: Yup.string()
            .email()
            .required()
    })

    const initialValues={
        title: '',
        email: '',
        adminEmail: '',
    }

    return(
        <Container fluid className="p-0 m-0 add-customer">
            <div className='back-row'>
                <span onClick={() => navigate(-1)}><img src={BackIcon}/> Back</span>
            </div>
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Add Customer</h1>
            </div>
            <div className='form-row'>
                <Formik validationSchema={customerSchema} onSubmit={handleSubmit} initialValues={initialValues}>
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        touched,
                        isValid
                    }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label className='form-text'>Title</Form.Label>
                                <Form.Control
                                required
                                className='form-input'
                                type='text'
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                isValid={touched.title && !errors.title}
                                placeholder='Enter Customer Title' 
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label className='form-text'>Email</Form.Label>
                                <Form.Control
                                required
                                className='form-input'
                                type='text'
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                placeholder='Enter Customer Email'
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label className="form-text">Admin Email</Form.Label>
                                <Form.Control
                                required
                                className='form-input'
                                type='text'
                                name="adminEmail"
                                value={values.adminEmail}
                                onChange={handleChange}
                                isValid={touched.adminEmail && !errors.adminEmail}
                                placeholder='Enter Email of Admin Account'
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label className='form-text'>Subscription Plan</Form.Label>
                                <DropdownButton
                                variant='primary'
                                title="Subscription"
                                className='form-dropdown form-input'
                                align="start"
                                >
                                
                                </DropdownButton>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label className='form-text'>Addons</Form.Label>
                                <DropdownButton
                                variant='primary'
                                title="Addons"
                                className='form-dropdown form-input'
                                align="start"
                                >
                                
                                </DropdownButton>
                            </Form.Group>
                            <Form.Group>

                            </Form.Group>
                        </Row>
                        <Row>
                            <div className='btn-row d-flex'>
                                <Button type="submit" className='submit-btn'>Add</Button>
                            </div>
                        </Row>
                    </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
}