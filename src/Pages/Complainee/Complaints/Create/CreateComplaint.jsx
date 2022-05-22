import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BackIcon from '../../../../Assets/Images/icons/back-arrow.svg';
import { Formik } from "formik";
import * as Yup from 'yup';

export const CreateComplaint = () => {

    const navigate = useNavigate();

    const complaintSchema = Yup.object

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

                </div>
            </div>
        </Container>
    )
}