import React, { useEffect, useState } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { HashLoader } from 'react-spinners';
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export const ListDepartments = () => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate();

    useEffect(() => {
        getDepartments()
    }, [])

    const getDepartments = async () => {
        setLoading(true)
        const response = await axios.get(`http://localhost:3002/admin/depts/all/${user.user.company_id}`)
        if (response.data) {
            setLoading(false)
            setList(response.data);
        }
    }

    const addDepartment = async () => {
        const deptData = {
            title: name
        }
        const response = await axios.post(`http://localhost:3002/admin/deptsAdd/${user.user.company_id}`, deptData)
        if (response.data) {
            toast.success(response.data)
            setShow(false)
            getDepartments()
        }
    }

    const handleDelete = async (id) => {
        console.log('test')
        const response = await axios.delete(`http://localhost:3002/admin/depts/delete/${id}`)
        if (response.data) {
            toast.success(response.data)
            getDepartments()
        }
    }

    const handleEdit = async (id) => {
        console.log(id)
    }

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

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
        <Container fluid className="p-0 m-0 list-departments">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <Button className="primary mt-3" onClick={addDepartment}>Add</Button>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Departments</h1>
            </div>
            <div className="customers-view">
                <div className="filter-row d-flex align-items-start">
                    <Button className="btn-add" onClick={handleShow}>Add New</Button>
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
                                <td className={department.category.length === 0 ? 'red' : null}>{department.category.length}</td>
                                <td className={department.employees.length === 0 ? 'red' : null}>{department.employees.length}</td>
                                <td>
                                    <Button className="btn-primary action-btn m-1" onClick={(e) => navigate(`/departments/${department._id}`)}>View</Button>
                                    <Button className="btn-warning action-btn m-1" onClick={(e) => handleEdit(department._id)}>Edit</Button>
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