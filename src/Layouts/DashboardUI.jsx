import React from "react";
import { Container } from "react-bootstrap";
import WhiteLogo from '../Assets/Images/Logos/qrfs-white-small.svg';
import DefaultPfp from '../Assets/Images/default-pfp.jpeg';

export const DashboardUI = (props) => {

    const Sidebar = props.sidebar
    const Content = props.content

    return(
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
                </div>
            </div>
        </Container>
    )
}