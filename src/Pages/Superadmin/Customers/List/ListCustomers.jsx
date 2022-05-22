import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export const ListCustomers = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCustomers()
    }, [])

    const getCustomers = async () => {
        setLoading(true)
        const response = await axios.get('http://localhost:3002/superadmin/customers')
        if (response.data) {
            setList(response.data);
            setLoading(false)
        }
    }

    console.log({list})

    if (loading) return <div></div>

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
                            {list.map((customer) => 
                            <tr>
                                <td>N/A</td>
                                <td>{customer.title}</td>
                                <td>N/A</td>
                                <td>{customer.email}</td>
                                <td>ACTIVE</td>
                                <td>N/A</td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
}