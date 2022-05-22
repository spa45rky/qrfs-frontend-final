import './App.css';
import './Assets/Styles/index.scss'
import { SuperAdminDashboard } from './Pages/Superadmin/Dashboard/SuperAdminDashboard';
import { ComplaineeDashboard } from './Pages/Complainee/Dashboard/ComplaineeDashboard';
import { AdminDashboard } from './Pages/Admin/Dashboard/AdminDashboard';
import { ListCustomers } from './Pages/Superadmin/Customers/List/ListCustomers';
import { ListComplaints } from './Pages/Complainee/Complaints/List/ListComplaints';
import { ListEmployees } from './Pages/Admin/Employees/List/ListEmployees';
import { CreateComplaint } from './Pages/Complainee/Complaints/Create/CreateComplaint';
import { AddEmployee } from './Pages/Admin/Employees/Create/AddEmployee';
import { Login } from './Pages/Shared/Login/Login';
import { Signup } from './Pages/Shared/Signup/Signup';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import WhiteLogo from './Assets/Images/Logos/qrfs-white-small.svg';
import DefaultPfp from './Assets/Images/default-pfp.jpeg';
import { Container, Button } from "react-bootstrap";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from './Services/Redux/reducers/authSlice';
import { useEffect, useState } from 'react';
import SAsidebarContent from './Components/superadminSidebar';
import Sidebar from './Components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateCustomer } from './Pages/Superadmin/Customers/Create/CreateCustomer';
import io from 'socket.io-client';

// axios.defaults.baseURL = "http://localhost:3002";
// axios.defaults.headers.post['Content-type'] = 'application/json';



// axios.interceptors.request.use(
//   (config) => {
//     config.headers['Authorization'] = `Bearer ${bearerToken.token}`
//     return config;
//   }, (err) => {
//     return Promise.reject(err);
//   }
// )

// const socket = io.connect("http://localhost:3009");


function App() {
  const [access, setAccess] = useState('')
  const [content, setContent] = useState()
  const { user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user) {
      switch (user.user.role) {
        case "SUPERADMIN": 
          setContent(SAsidebarContent)
          setAccess('SUPERADMIN')
          break;
        case "ADMIN":
          // setContent()
          setAccess('ADMIN')
          break;
        case "COMPLAINEE":
          setAccess('COMPLAINEE')
      }
    }
  }, [user])



  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    
  };


  return (
    <div className="App">
      <ToastContainer/>
      {user ?
      access === "COMPLAINEE" ?

      // WILL ONLY RENDER COMPLAINEE DASHBOARD BASED ON USER ROLE

      <BrowserRouter>
      <Container fluid className="dashboardContainer d-flex p-0 m-0">
            <div className="left-sidebar col-2">
                <div className="top-logo">
                    <img src={WhiteLogo} className='dashboard-logo mt-4' />
                </div>
                <div className="middle-sidebar">
                  <Sidebar role={access}/>
                </div>
                <hr className="hr"/>
                <div className="bottom-user d-flex"> 
                    <div className="pfp-circle">
                        <img src={DefaultPfp} className="pfp-img" />
                    </div>
                    <div className="user-info">
                        <h6 className="m-0">{user.user.name}</h6>
                        <p className="role-font">{user.user.role}</p>
                        <Button className="btn btn-primary" onClick={handleLogout}>logout</Button>
                    </div>
                </div>
            </div>
            <div className="right-content col-10">
                <div className="right-menu">
                  {
                      <Routes>
                          <Route path="/dashboard" element={<ComplaineeDashboard/>} />
                          <Route path="/complaints/add" element={<CreateComplaint/>} />
                          <Route path="/complaints" element={<ListComplaints/>} />
                          <Route path="*" element={<Navigate to="/dashboard" replace />} />
                      </Routes>
                    
                  }
                </div>
            </div>
        </Container>
        </BrowserRouter>
        :
        access === "ADMIN" ?

        <BrowserRouter>
        <Container fluid className="dashboardContainer d-flex p-0 m-0">
              <div className="left-sidebar col-2">
                  <div className="top-logo">
                      <img src={WhiteLogo} className='dashboard-logo mt-4' />
                  </div>
                  <div className="middle-sidebar">
                    <Sidebar role={access}/>
                  </div>
                  <hr className="hr"/>
                  <div className="bottom-user d-flex"> 
                      <div className="pfp-circle">
                          <img src={DefaultPfp} className="pfp-img" />
                      </div>
                      <div className="user-info">
                          <h6 className="m-0">{user.user.name}</h6>
                          <p className="role-font">{user.user.role}</p>
                          <Button className="btn btn-primary" onClick={handleLogout}>logout</Button>
                      </div>
                  </div>
              </div>
              <div className="right-content col-10">
                  <div className="right-menu">
                    {
                        <Routes>
                            <Route path="/dashboard" element={<AdminDashboard/>} />
                            <Route path="/employees" element={<ListEmployees/>} />
                            <Route path="/employees/add" element={<AddEmployee/>} />
                            <Route path="*" element={<Navigate to="/dashboard" replace />} />
                        </Routes>
                      
                    }
                  </div>
              </div>
          </Container>
        </BrowserRouter>
      :
      <BrowserRouter>
      <Container fluid className="dashboardContainer d-flex p-0 m-0">
            <div className="left-sidebar col-2">
                <div className="top-logo">
                    <img src={WhiteLogo} className='dashboard-logo mt-4' />
                </div>
                <div className="middle-sidebar">
                  <Sidebar role={access}/>
                </div>
                <hr className="hr"/>
                <div className="bottom-user d-flex"> 
                    <div className="pfp-circle">
                        <img src={DefaultPfp} className="pfp-img" />
                    </div>
                    <div className="user-info">
                        <h6 className="m-0">{user.user.name}</h6>
                        <p className="role-font">{user.user.role}</p>
                        <Button className="btn btn-primary" onClick={handleLogout}>logout</Button>
                    </div>
                </div>
            </div>
            <div className="right-content col-10">
                <div className="right-menu">
                  {
                      <Routes>
                          <Route path="/dashboard" element={<SuperAdminDashboard/>} />
                          <Route path="/customers" element={<ListCustomers/>} />
                          <Route path="/customers/add" element={<CreateCustomer/>} />
                          <Route path="*" element={<Navigate to="/dashboard" replace />} />
                      </Routes>
                    
                  }
                </div>
            </div>
        </Container>
        </BrowserRouter>
      : 
      <BrowserRouter>
          <Routes>
            <Route index path='/' element={<Login/>} />
            <Route path="/register" element = {<Signup/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
