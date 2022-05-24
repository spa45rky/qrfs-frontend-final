import React, { useEffect, useState } from "react";
import BackIcon from '../../../../Assets/Images/icons/back-arrow.svg';
import AbstractImg from '../../../../Assets/Images/abstract-1.svg';
import { Container, Row, Col, Table, Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import axios from 'axios';
import { Leaderboard } from "../../../Shared/Leaderboard";
import { LargeCard } from "../../../Shared/LargeCard";
import { SmallCard } from "../../../Shared/SmallCard";
import EmployeesImg from '../../../../Assets/Images/employees-img.png';
import CategoriesImg from '../../../../Assets/Images/categories-img.png';
import { HashLoader } from 'react-spinners';
import { css } from "@emotion/react";


export const ViewDepartment = () => {
    const [data, setData] = useState([])
    const [employees, setEmployees] = useState([])
    const [category, setCategory] = useState([])
    const [unassigned, setUnassigned] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [currentCategories, setCurrent] = useState([])

    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth)

    let depart_id = useParams()

    useEffect(() => {
        getEmployees()
        getDepartment()
        getUnassigned()
        getCategories()
    }, [])

    const getDepartment = async () => {
        setLoading(true)
        const response = await axios.get(`http://localhost:3002/admin/depts/${depart_id.id}`);
        if (response.data) {
            setLoading(false)
            setData(response.data)
        }
    }

    console.log({data})


    const getUnassigned = async () => {
        const response = await axios.get(`http://localhost:3002/admin/depts/unassigned/${user.user.company_id}`)
        if (response.data) {
            setUnassigned(response.data);
        }
    }

    const getEmployees = async () => {
        setLoading(true)
        const response = await axios.get(`http://localhost:3002/admin/depts/all/employees/${depart_id.id}`)
        if (response.data) {
            setLoading(false)
            setEmployees(response.data)
        }
    }

    // THIS CATEGORY CALL WILL ONLY GET UNASSIGNED CATEGORIES, IT'S DIFFERENT FROM THE OTHER CALL WITH THE SAME NAME
    const getCategories = async () => {
        const response = await axios.get(`http://localhost:3002/admin/categories/unassigned/${user.user.company_id}`)
        if (response.data) {
            console.log(response.data)
            setCategory(response.data)
        }
    }

    const assignCategory = async (id) => {
        const catData = {
            id: id
        }
        const response = await axios.put(`http://localhost:3002/admin/categories/dept/add/${depart_id.id}`, catData)
        if (response.data) {
            toast.success(response.data)
        }
    }

    const addEmployee = async (email) => {
        const empData = {
            email:email
        }

        const response = await axios.put(`http://localhost:3002/admin/depts/employee/add/${depart_id.id}`, empData)
        if (response.data) {
            toast.success(response.data)
            getUnassigned()
            getEmployees()
        }
    }

    const handleDelete = async (email) => {
        const empData = {
            email:email
        }
        const response = await axios.put(`http://localhost:3002/admin/depts/delete/employee/${depart_id.id}`, empData)
        if (response.data) {
            toast.success(response.data)
            getUnassigned()
            getEmployees()
        }
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

    // MODAL SHOW/HIDE FUNCTIONS
    const handleClose = () => setShow(false)
    const handleClose2 = () => setShow2(false)

    return(
        <Container className="p-0 m-0 view-department">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <th>Display</th>
                            <th>Name</th>
                            <th>Email</th>
                        </thead>
                        <tbody>
                            {unassigned.map((user) =>
                            <tr>
                                <td>{user.pfp}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button className="btn-success action-btn m-1" onClick={(e) => addEmployee(user.email)}>Add</Button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Assign Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <th>Title</th>
                        </thead>
                        <tbody>
                            {category.map((cat) =>
                            <tr>
                                <td>{cat.title}</td>
                                <td>
                                    <Button className="btn-success action-btn m-1" onClick={(e) => assignCategory(cat._id)}>Add</Button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='back-row'>
                <span onClick={() => navigate(-1)}><img src={BackIcon}/> Back</span>
            </div>
            <div className='top-header mt-2'>
                <h3 className='name-heading'>Department: <span className="qrfsPurple">{data.title}</span></h3>
            </div>
            <div className="view-body">
                <div className="view-left">
                    <div className="employees-table">
                        <h5>Employees</h5>
                        <Table  striped bordered hover>
                            <thead>
                                <th>#</th>
                                <th>Display</th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Active Complaints</th>
                                <th>Operations</th>
                            </thead>
                            <tbody>
                                {employees.map((user, index) => 
                                <tr>
                                    <td>{index}</td>
                                    <td>{user.pfp}</td>
                                    <td>{user.name}</td>
                                    <td>{user.avgRating}</td>
                                    <td>{user.assignedComplaints.length}</td>
                                    <td>
                                        <Button className="btn-danger action-btn m-1" onClick={(e) => handleDelete(user.email)}>Delete</Button>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="view-right">
                    <LargeCard
                    img={AbstractImg}
                    heading="Assigned Categories"
                    subheading="Top 3"
                    />
                    <div className="d-flex mt-3 justify-content-center btn-container">
                        <span className="pointer" onClick={() => setShow(true)}>
                        <SmallCard
                        graphic={EmployeesImg}
                        text="ADD EMPLOYEE"
                        />
                        </span>
                        <span className="pointer" onClick={() => setShow2(true)}>
                        <SmallCard
                        graphic={CategoriesImg}
                        text="ADD CATEGORY"
                        />
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    )
}