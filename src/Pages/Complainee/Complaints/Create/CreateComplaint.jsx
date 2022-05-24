import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col, Select } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BackIcon from '../../../../Assets/Images/icons/back-arrow.svg';
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { toast } from "react-toastify";

export const CreateComplaint = () => {
    const [category, setCategory] = useState([])
 
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        const response = await axios.get(`http://localhost:3002/admin/categories/all/${user.user.company_id}`)
        if (response.data) {
            setCategory(response.data)
        }
    }

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

    const handleSubmit = async (e) => {
        const complaintData = {
            user_id: user.user._id,
            ...e
        }

        const sendCat = category.filter((cat) => cat.title === complaintData.category)

        complaintData.category = sendCat[0]

        const response = await axios.post(`http://localhost:3002/user/complaints/file/complaint/${user.user.company_id}`, complaintData)
        if (response.data) {
            toast.success(response.data)
        } else {
            console.log(response)
        }
    }

    return(
        <Container className="p-0 m-0 add-employee">
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
                <div className="form-row">
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
                                    <Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="form-text">Title</Form.Label>
                                            <Form.Control
                                            required 
                                            className='complaint-input' 
                                            type="text"
                                            name="title"
                                            value={values.title}
                                            onChange={handleChange}
                                            placeholder="e.g. Projector Repair"
                                            isValid={touched.title && !errors.title}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="form-text">Category</Form.Label>
                                            <Form.Select
                                            required
                                            className='complaint-input'
                                            name="category"
                                            value={values.category}
                                            onChange={handleChange}
                                            isValid={touched.category && !errors.category}
                                            >
                                                {category.map((cat) =>
                                                    <option value={cat.id}>{cat.title}</option>
                                                )}
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="form-text">Description</Form.Label>
                                            <Form.Control
                                            as="textarea"
                                            resize
                                            rows={5}
                                            required 
                                            className='complaint-input'
                                            style={{resize: 'none'}}
                                            type="text"
                                            name="description"
                                            value={values.description}
                                            onChange={handleChange}
                                            placeholder="Describe the complaint here..."
                                            isValid={touched.description && !errors.description}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col}>
                                            <Form.Label className="form-text">Add Media</Form.Label>
                                            <div className="d-flex">
                                                <Form.Control
                                                style={{width: '350px', marginRight: '50px'}}
                                                />
                                                <Button className="btn-add">Choose File</Button>
                                            </div>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <div className="d-flex mt-5">
                                        <Button className="btn-add" type="submit">Continue</Button>
                                        </div>
                                    </Row>
                                </Form>
                            )}
                    </Formik>
                </div>
            </div>
        </Container>
    )
}