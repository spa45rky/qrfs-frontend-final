import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../../../Assets/Images/icons/back-arrow.svg';
import { Container, Form, Button, Row, Col, DropdownButton } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export const AddEmployee = () => {

    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate();

    const employeeSchema = Yup.object().shape({
        firstName: Yup.string()
        .min(2, 'First Name is too short!')
        .max(50, 'First Name is too long!')
        .required('Required'),
        lastName: Yup.string()
        .min(2, 'Last Name is too short!')
        .max(50, 'Last Name is too long!')
        .required('Required'),
        email: Yup.string().email('Invalid Email!').required('Required'),
    })

    const handleSubmit = async (e) => {
        const employeeData = {
            name: e.firstName + ' ' + e.lastName,
            email: e.email,
            role: e.role
        }

        const response = await axios.post(`http://localhost:3002/admin/users/add/${user.user.company_id}`, employeeData)
        if (response.data) {
            console.log(response.data)
        }
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        role: ''
    }


    return(
      <Container className="p-0 m-0 add-employee">
          <div className='back-row'>
                <span onClick={() => navigate(-1)}><img src={BackIcon}/> Back</span>
            </div>
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Add Employee</h1>
            </div>
            <div className='form-row'>
                <Formik validationSchema={employeeSchema} onSubmit={handleSubmit} initialValues={initialValues}>
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        touched,
                        isValid
                    }) => (
                    <Form onSubmit={handleSubmit} noValidate>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label className='form-text'>First Name</Form.Label>
                                <Form.Control
                                required
                                className='form-input'
                                type='text'
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isValid={touched.firstName && !errors.firstName}
                                placeholder='Enter First Name' 
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label className='form-text'>Last Name</Form.Label>
                                <Form.Control
                                required
                                className='form-input'
                                type='text'
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isValid={touched.lastName && !errors.lastName}
                                placeholder='Enter Last Name'
                                />
                            </Form.Group>
                        </Row>
                        <Row>
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
                            <Form.Group as={Col}>
                                <Form.Label className='form-text'>Role</Form.Label>
                                <Form.Select
                                required
                                className='form-input'
                                name="role"
                                value={values.role}
                                onChange={handleChange}
                                isValid={touched.role && !errors.role}
                                >
                                    <option value="COMPLAINEE">Complainee</option>
                                    <option value="SERVICEPROVIDER">Service Provider</option>
                                </Form.Select>
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