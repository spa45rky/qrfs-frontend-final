import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ListCustomers = () => {
    return(
        <Container fluid className="p-0 m-0">
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Customers</h1>
            </div>
            <div className="customers-view">
                <div className="filter-row d-flex align-items-start">
                    <Link to="/customers/add"><Button className="btn-add">Add New</Button></Link>
                </div>
                <div className="table-row">
                    <Table striped bordered hover className="qrfs-table">
                        <thead>
                            <th>Logo</th>
                            <th>Company Name</th>
                            <th>Subscription Plan</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Operations</th>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
}