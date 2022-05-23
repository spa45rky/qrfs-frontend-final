import React from "react";
import BackIcon from '../../../../Assets/Images/icons/back-arrow.svg';
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export const ViewCustomer = () => {

    const navigate = useNavigate();

    return(
        <Container className="m-0 p-0">
            <div className='back-row'>
                <span onClick={() => navigate(-1)}><img src={BackIcon}/> Back</span>
            </div>
            <div className='top-header mt-5'>
                <h1 className='name-heading'></h1>
            </div>
        </Container>
    )
}