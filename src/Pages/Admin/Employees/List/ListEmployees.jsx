import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLoader } from 'react-spinners';
import { css } from "@emotion/react";

export const ListEmployees = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)


    const { user } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        getEmployees();
    }, [])

    const getEmployees = async () => {
        setLoading(true)
        const response = await axios.get(`http://localhost:3002/admin/users/all/${user.user.company_id}`)
        if (response.data) {
            setLoading(false)
            setList(response.data)
        }
    }

    const handleDelete = async () => {

    }

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
        <Container fluid className="p-0 m-0 list-employees">
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Employees</h1>
            </div>
            <div className="customers-view">
                <div className="filter-row d-flex align-items-start">
                    <Link to="/employees/add"><Button className="btn-add">Add New</Button></Link>
                </div>
                <div className="table-row">
                    <Table striped bordered hover className="qrfs-table">
                        <thead>
                            <th>Role</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Sign Up Type</th>
                            <th>Operations</th>
                        </thead>
                        <tbody>
                            {list.map((employee) => 
                            <tr>
                                <td><span className={employee.role === "ADMIN" 
                                ? "admin-role" : employee.role === "COMPLAINEE" 
                                ? "complainee-role" : "sp-role"}>{employee.role}</span></td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.sign_type}</td>
                                <td>
                                    <Button className="btn-warning action-btn m-1">Edit</Button>
                                    <Button className="btn-danger action-btn m-1" onClick={(e) => handleDelete(employee._id)}>Delete</Button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
}