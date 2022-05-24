import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { InfoCard } from '../../Shared/InfoCard';
import MultipleUsers from '../../../Assets/Images/icons/multiple-users.svg';
import Complaints from '../../../Assets/Images/icons/complaints-filed.svg';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { HashLoader } from 'react-spinners';
import { css } from "@emotion/react";

export const SpDashboard = () => {
    const [loading, setLoading] = useState(false)

    const { user } = useSelector((state) => state.auth)

    const userObject = user.user
    let userName = userObject.name
    userName = userName.substring(0, userName.indexOf(' '))

    const override = css`
    display: block;
    margin: 0 auto;
    `;



if (loading) return (
    <div className='d-flex justify-content-center align-items-center loader-container'>
        <HashLoader color="9A98F0" css={override} size={100}/>
    </div>
    
)

    return(
        <Container fluid className="p-0 m-0">
            <div className='top-header mt-5'>
                <h1 className='name-heading'>{userName}'s Dashboard</h1>
            </div>
            <div className='card-row d-flex justify-content-between'>
                <InfoCard 
                Heading="Total Complaints"
                Number={13}
                Icon={MultipleUsers}
                />
            </div>
        </Container>
    )
}