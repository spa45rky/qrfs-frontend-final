import './App.css';
import './Assets/Styles/index.scss'
import { Dashboard } from './Pages/Admin/Dashboard/Dashboard';
import { Login } from './Pages/Shared/Login/Login';
import { Signup } from './Pages/Shared/Signup/Signup';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import WhiteLogo from './Assets/Images/Logos/qrfs-white-small.svg';
import DefaultPfp from './Assets/Images/default-pfp.jpeg';
import { Container } from "react-bootstrap";
import axios from 'axios';


axios.defaults.baseURL = "http://localhost:3002";
axios.defaults.headers.post['Content-type'] = 'application/json';

axios.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  }, (err) => {
    return Promise.reject(err);
  }
)


function App() {
  return (
    <div className="App">
      {false ?
      <Container fluid className="dashboardContainer d-flex p-0 m-0">
            <div className="left-sidebar col-2">
                <div className="top-logo">
                    <img src={WhiteLogo} className='dashboard-logo mt-4' />
                </div>
                <div className="middle-sidebar">

                </div>
                <hr className="hr"/>
                <div className="bottom-user d-flex"> 
                    <div className="pfp-circle">
                        <img src={DefaultPfp} className="pfp-img" />
                    </div>
                    <div className="user-info">
                        <h6 className="m-0">Raafaye Faheem</h6>
                        <p className="role-font">Super Admin</p>
                    </div>
                </div>
            </div>
            <div className="right-content col-10">
                <div className="right-menu">
                  {
                    <BrowserRouter>
                      <Routes>
                          <Route path="/dashboard" element={<Dashboard/>} />
                          <Route path="*" element={<Navigate to="/dashboard" replace />} />
                      </Routes>
                    </BrowserRouter>
                  }
                </div>
            </div>
        </Container>
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
