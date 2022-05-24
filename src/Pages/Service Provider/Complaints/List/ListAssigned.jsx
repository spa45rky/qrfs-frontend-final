import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ComplaintCard } from '../../../Complainee/Complaints/List/ComplaintCard';

export const ListAssigned = () => {
    const [list, setList] = useState([])

    const { user } = useSelector((state) => state.auth)

    // useEffect(() => {
    //     setInterval(() => {
    //         getSP()
    //     }, 1000)
    // },[])

    const getAssigned = async (id) => {
        const response = await axios.get(`http://localhost:3002/serviceprovider/complaints/assigned/${id}`)
        if (response.data){
            setList(response.data)
        }
    }

    const getSP = async () => {
        const response = await axios.get(`http://localhost:3002/serviceprovider/get/sp/${user.user._id}`)
        if (response.data){
            console.log('here',response.data._id)
            getAssigned(response.data._id)
        }
    }

    return(
        <Container className="p-0 m-0">
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Complaints</h1>
            </div>
            <div className="complaints-view">
                <div className="list-complaints">
                    {list.map((complaint) =>
                    <ComplaintCard
                    title={complaint.title}
                    status={complaint.status}
                    dateCreated={complaint.dateCreated}
                    dateUpdated={complaint.dateUpdated ? complaint.dateUpdated : null}
                    dateResolved={complaint.dateResolved ? complaint.dateResolved : null}
                    />
                    )}
                </div>
            </div>
        </Container>
    )
}