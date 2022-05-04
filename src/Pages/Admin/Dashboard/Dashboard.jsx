import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { InfoCard } from '../../Shared/InfoCard';
import MultipleUsers from '../../../Assets/Images/icons/multiple-users.svg';
import Complaints from '../../../Assets/Images/icons/complaints-filed.svg';


export const Dashboard = () => {
    const [user, setUser] = useState('Admin');

    return(
        <Container fluid className="p-0 m-0">
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Rafay's Dashboard</h1>
            </div>
            <div className='card-row d-flex justify-content-between'>
                <InfoCard 
                Heading="Employees"
                Number="2300"
                Icon={MultipleUsers}
                />
                <InfoCard
                Heading="Complaints Filed"
                Number="67"
                Icon={Complaints}
                />
                <InfoCard
                Heading="Feedback Given"
                Number="20"
                />
            </div>
        </Container>
    )

}