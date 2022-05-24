import axios from "axios";
import React, { useEffect, useState } from "react";
import {Container, Modal, Button, Table, Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


export const Categories = () => {
    const [list, setList] = useState([])
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        const response = await axios.get(`http://localhost:3002/admin/categories/all/${user.user.company_id}`)
        if (response.data) {
            setList(response.data)
        }
    }

    const addCategory = async () => {
        const catData = {
            title: name
        }
        const response = await axios.post(`http://localhost:3002/admin/categories/add/${user.user.company_id}`, catData)
        if (response.data) {
            toast.success(response.data)
            getCategories()
            setShow(false)
        }
    }

    const handleDelete = async () => {

    }

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)

    return(
        <Container fluid className="p-0 m-0 list-departments">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                            <Button className="primary mt-3" onClick={addCategory}>Add</Button>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='top-header mt-5'>
                <h1 className='name-heading'>Categories</h1>
            </div>
            <div className="customers-view">
                <div className="filter-row d-flex align-items-start">
                    <Button className="btn-add" onClick={handleShow}>Add New</Button>
                </div>
                <div className="table-row">
                    <Table striped bordered hover className="qrfs-table">
                        <thead>
                            <th>Title</th>
                            <th>Operations</th>
                        </thead>
                        <tbody>
                            {list.map((category) =>
                            <tr>
                                <td>{category.title}</td>
                                <td>
                                    <Button className="btn-danger action-btn m-1" onClick={(e) => handleDelete(category._id)}>Delete</Button>
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