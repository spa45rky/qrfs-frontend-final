import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ListComplaints = () => {
    return(
        <Container className="p-0 m-0">
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Complaints</h1>
            </div>
            <div className="complaints-view">
                <div className="filter-row d-flex align-items-start">
                    <Link to="/complaints/add"><Button className="btn-add">File Complaint</Button></Link>
                </div>
            </div>
        </Container>
    )
}