import React from "react";
import {Container, Modal, Button, Table} from 'react-bootstrap';


export const Categories = async () => {
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