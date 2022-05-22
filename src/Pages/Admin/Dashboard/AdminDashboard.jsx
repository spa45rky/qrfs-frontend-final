import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { InfoCard } from '../../Shared/InfoCard';
import MultipleUsers from '../../../Assets/Images/icons/multiple-users.svg';
import Complaints from '../../../Assets/Images/icons/complaints-filed.svg';
import { useSelector } from 'react-redux';
import axios from 'axios';


export const AdminDashboard = () => {
    const { user } = useSelector((state) => state.auth)
    const [employees, setEmployees] = useState([])
    const [complaints, setComplaints] = useState([])

    const userObject = user.user
    let userName = userObject.name
    userName = userName.substring(0, userName.indexOf(' '))

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const responseA = await axios.get(`http://localhost:3002/admin/users/all/${user.user.company_id}`)
        // const responseB = await axios.get(`http://localhose:3002/admin/complaints/${user.user.company_id}`)
        if (responseA.data) {
            setEmployees(responseA.data);
        }
    }



    

    return(
        <Container fluid className="p-0 m-0">
            <div className='top-header mt-5'>
                <h1 className='name-heading'>{userName}'s Dashboard</h1>
            </div>
            <div className='card-row d-flex justify-content-between'>
                <InfoCard 
                Heading="Employees"
                Number={employees.length}
                Icon={MultipleUsers}
                />
                <InfoCard
                Heading="Complaints Filed"
                Number="0"
                Icon={Complaints}
                />
                <InfoCard
                Heading="Feedback Given"
                Number="0"
                />
            </div>
        </Container>
    )

}