import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ComplaintCard } from "./ComplaintCard";
import { useSelector } from "react-redux";

export const ListComplaints = () => {
    const [list, setList] = useState([])

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        getComplaints()
    }, [])

    const getComplaints = async () => {
        const response = await axios.get(`http://localhost:3002/user/complaints/${user.user._id}`)
        if (response.data) {
            setList(response.data)
            console.log(response.data)
        }
    }


    return(
        <Container className="p-0 m-0">
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Complaints</h1>
            </div>
            <div className="complaints-view">
                <div className="filter-row d-flex align-items-start">
                    <Link to="/complaints/add"><Button className="btn-add">File Complaint</Button></Link>
                </div>
                <div className="list-complaints">
                    {list.map((complaint) =>
                    <ComplaintCard
                    title={complaint.title}
                    // assignedTo={}
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