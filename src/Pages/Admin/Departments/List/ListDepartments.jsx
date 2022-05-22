import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

export const ListDepartments = () => {
    const [list, setList] = useState([])

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        getDepartments()
    }, [])

    const getDepartments = async () => {
        const response = await axios.get(`http://localhost:3002/admin/depts/all/${user.user.company_id}`)
        if (response.data) {
            console.log(response.data)
            setList(response.data);
        }
    }

    const handleDelete =(id) => {

    }

    return(
        <Container fluid className="p-0 m-0">
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Departments</h1>
            </div>
            <div className="customers-view">
                <div className="filter-row d-flex align-items-start">
                    <Link to="/customers/add"><Button className="btn-add">Add New</Button></Link>
                </div>
                <div className="table-row">
                    <Table striped bordered hover className="qrfs-table">
                        <thead>
                            <th>Title</th>
                            <th>Assigned Categories</th>
                            <th>Employees</th>
                            <th>Operations</th>
                        </thead>
                        <tbody>
                            {list.map((department) => 
                            <tr>
                                <td>{department.title}</td>
                                <td>{department.category.length}</td>
                                <td>{department.employees.length}</td>
                                <td className=""><span className="active-role">ACTIVE</span></td>
                                <td>
                                    <Button className="btn-warning action-btn m-1">Edit</Button>
                                    <Button className="btn-danger action-btn m-1" onClick={(e) => handleDelete(department._id)}>Delete</Button>
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