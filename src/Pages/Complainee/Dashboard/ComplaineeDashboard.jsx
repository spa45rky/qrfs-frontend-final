import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux';


export const ComplaineeDashboard = () => {
    const { user } = useSelector((state) => state.auth)

    const userObject = user.user
    let userName = userObject.name
    userName = userName.substring(0, userName.indexOf(' '))


    return(
        <Container className="p-0 m-0">
             <div className='top-header mt-5'>
                <h1 className='name-heading'>{userName}'s Dashboard</h1>
            </div>
            <div className="complainee-dashboard-row">
                
            </div>
        </Container>
    )
}