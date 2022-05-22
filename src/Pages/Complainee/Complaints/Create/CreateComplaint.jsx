import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BackIcon from '../../../../Assets/Images/icons/back-arrow.svg';
import { Formik } from "formik";
import * as Yup from 'yup';

export const CreateComplaint = () => {

    const navigate = useNavigate();

    const complaintSchema = Yup.object().shape({
        title: Yup.string()
        .required('Required!'),
        category: Yup.string()
        .required('Required!'),
        description: Yup.string()
        .min(10, 'Please provide some more description about the complaint!')
        .required('Required!'),
    })

    const initialValues = {
        title: '',
        category: '',
        description: '',
    }

    const handleSubmit = (e) => {

    }

    return(
        <Container className="p-0 m-0">
            <div className='back-row'>
                <span onClick={() => navigate(-1)}><img src={BackIcon}/> Back</span>
            </div>
            <div className="add-complaint">
                <div className="add-complaint-header">
                    <h4>File Complaints</h4>
                </div>
                <div className="add-complaint-subheading">
                    <p>Complaint Details</p>
                </div>
                <div className="complaint-form-container">
                    <Formik
                    initialValues={initialValues}
                    validationSchema={complaintSchema}
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
                                    <Form.Group>
                                        <Form.Label className="form-text">Title</Form.Label>
                                        <Form.Control
                                        required 
                                        className='complaint-input' 
                                        type="text"
                                        name="title"
                                        value={values.title}
                                        onChange={handleChange}
                                        isValid={touched.title && !errors.title}
                                        />
                                    </Form.Group>
                                </Form>
                            )}
                    </Formik>
                </div>
            </div>
        </Container>
    )
}