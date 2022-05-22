import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { InfoCard } from '../../Shared/InfoCard';
import MultipleUsers from '../../../Assets/Images/icons/multiple-users.svg';
import Complaints from '../../../Assets/Images/icons/complaints-filed.svg';
import { useSelector } from 'react-redux';


export const AdminDashboard = () => {
    const { user } = useSelector((state) => state.auth)

    const userObject = user.user
    let userName = userObject.name
    userName = userName.substring(0, userName.indexOf(' '))

    return(
        <Container fluid className="p-0 m-0">
            <div className='top-header mt-5'>
                <h1 className='name-heading'>{userName}'s Dashboard</h1>
            </div>
            <div className='card-row d-flex justify-content-between'>
                <InfoCard 
                Heading="Employees"
                Number="2"
                Icon={MultipleUsers}
                />
                <InfoCard
                Heading="Complaints Filed"
                Number="12"
                Icon={Complaints}
                />
                <InfoCard
                Heading="Feedback Given"
                Number="4"
                />
            </div>
        </Container>
    )

}